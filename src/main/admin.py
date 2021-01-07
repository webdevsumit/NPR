from django.contrib import admin
from . models import Product, Comments, Likes
# Register your models here.
admin.site.register(Product)
admin.site.register(Comments)
admin.site.register(Likes)
