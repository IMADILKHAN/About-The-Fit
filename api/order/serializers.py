from rest_framework import serializers
from .models import Order




class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('user','product_name','total_products','transaction_id','total_amount','category')

        def __str__(self):
            return name
