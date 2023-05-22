from django.db import models
from api.category.models import Category
# Create your models here.



class Product(models.Model):
    name = models.CharField(max_length=50);
    description = models.CharField(max_length=500);
    price = models.CharField(max_length = 50);
    stock = models.CharField(max_length=50);
    is_active = models.BooleanField(default=True,blank=True)
    image = models.ImageField(upload_to="images/",blank=True,null=True)
    slug = models.SlugField(default=None,blank=True,null=True)
    category = models.ForeignKey(Category,on_delete=models.SET_NULL,blank=True,null=True)
    creted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name="images")
    image = models.ImageField(upload_to="images/",blank=True,null=True)
