from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt

import braintree
# Create your views here.


gateway = braintree.BraintreeGateway(
  braintree.Configuration(
    environment=braintree.Environment.Sandbox,
    merchant_id='djz5yp2tpr6mf2kv',
    public_key='t3v8mj63kfbfs9kw',
    private_key='63e7ea721f6be851f61cc3d0dc2cfceb'
  )
)


def validate_user_session(id,token):
    UserModel = get_user_model()

    try:
        user = UserModel.get(id=pk)
        if user.session_token == token:
            return True
        return False
    except UserModel.DoesNotExist:
        return False


@csrf_exempt
def generate_token(request,id,token):
    if not validate_user_session(id,token):
        return JsonResponse({"error":"Invalid session,Login Again"})

    return JsonResponse({"clientToken":gateway.client_token.generate(),'sucess':"Token"})


@csrf_exempt
def process_payment(request,id,token):
    if not validate_user_session(id,token):
        return JsonResponse({"error":"Invalid session,Login Again"})

    nonce_from_the_client = request.POST["paymentMethodNonce"]
    amount = request.POST["amount"]

    result = gateway.transaction.sale({
    "amount": amount,
    "payment_method_nonce": nonce_from_the_client,
    "options": {
      "submit_for_settlement": True
                }
    })

    if result.is_success:
        return JsonResponse({"sucess":result.is_success,'transaction':{'id':result.transaction.id,'amount':result.transaction.amount}})
    return JsonResponse({"error":True,"sucess":False})
