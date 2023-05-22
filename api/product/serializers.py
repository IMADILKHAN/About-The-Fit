from rest_framework import serializers
from .models import Product,ProductImage



class ProductImageSerializer(serializers.ModelSerializer):
    class  Meta:
        model = ProductImage
        fields = ["id","product","image"]


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None,allow_empty_file=False,allow_null=True,required=False)
    images = ProductImageSerializer(many=True)


    class Meta:
        model = Product
        fields = ('id','name','description','price','image','images','category')

        def __str__(self):
            return name
