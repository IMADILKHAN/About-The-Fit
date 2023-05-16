from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from .models import CustomUser
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login,logout

import string
import random
import re


# Create your views here.


def generate_session_token(length=10):
    upper = list(string.ascii_uppercase)
    lower = list(string.ascii_lowercase)
    special_nums = list('1234567890*#!')
    avail = special_nums+upper+lower
    token  = "".join(random.SystemRandom().choice(avail) for _ in range(length))
    return token

@csrf_exempt
def signin(request):
    if request.method != "POST":
        return JsonResponse({"error":"send a post request with valid parameters"})

    username = request.POST["email"]
    password = request.POST["password"]

    if not re.match("[\w\.-]+@[\w\.-]+\.\w{2,4}",username):
        return JsonResponse({"error":"Enter valid username"})

    if len(password)< 6:
        return JsonResponse({"error":"Password atleast need to be 6 char long"})

    UserModel  = get_user_model()

    try:
        user = UserModel.objects.get(email=username)
        if user.check_password(password):
            user_dict = UserModel.objects.filter(email=username).values().first()
            user_dict.pop("password")

            if user.session_token != "0":
                user.session_token = "0"
                user.save()
                return JsonResponse({"error":"previous session exists"})
            token = generate_session_token()
            user.session_token = token
            user.save()
            login(request,user)
            return JsonResponse({"token":token,'user':user_dict})
        else:
            return JsonResponse({"error":"Invalid Password"})

    except UserModel.DoesNotExist:
        return JsonResponse({"error":"Invalid Email"})

def signout(request,id):


    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(pk=id)
        user.session_token = "0"
        user.save()
    except UserModel.DoesNotExist:
        return JsonResponse({"error":"Invalid user ID"})
    logout(request)
    return JsonResponse({"success":"Logout Success"})


class UserViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = {'create':[AllowAny]}
    queryset = CustomUser.objects.all().order_by('id')
    serializer_class = UserSerializer

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError:
            return [permission() for permission in self.permission_classes]
