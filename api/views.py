from django.http import JsonResponse

# Create your views here.

def home(request):
    return JsonResponse({'info':'from api views','name':'adil khan'})
