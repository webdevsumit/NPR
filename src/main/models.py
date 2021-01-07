from django.db import models
from django.urls import reverse


from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
# Create your models here.

class Comments(models.Model):
    Username = models.CharField(max_length = 100)
    Comment = models.TextField()

    def __str__(self):
        return self.Username

    def update_comment_path(self):
        return reverse('main:UpdateCommentsView',args = (self.id,))

    def destroy_comment_path(self):
        return reverse('main:DestroyCommentsView',args = (self.id,))
    

class Likes(models.Model):
    Username = models.CharField(max_length = 100)
    Like = models.IntegerField( default = -1)

    def __str__(self):
        return self.Username

    def update_like_path(self):
        return reverse('main:UpdateLikesView',args = (self.id,))

    def destry_like_path(self):
        return reverse('main:DestroyLikesView',args = (self.id,))


class Product(models.Model):
    Name = models.CharField(max_length = 1000)
    Image = models.ImageField(upload_to = 'productImage')
    LaunchDate  = models.DateTimeField(auto_now_add = True)
    AllComments = models.ManyToManyField(Comments)
    AllLikes = models.ManyToManyField(Likes)

    def __str__(self):
        return self.Name

    def launched_on(self):
        return self.LaunchDate.strftime(" %d-%m-%y")

    def product_name(self):
        return self.Name.upper()
            
    def no_of_comments(self):
        return self.AllComments.all().count()

    def no_of_likes(self):
        return self.AllLikes.filter(Like=1).count()

    def no_of_dislikes(self):
        return self.AllLikes.filter(Like=0).count()

    def product_path(self):
        return reverse('main:ProductViewById',args = (self.id,))

# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
# def create_auth_token(sender, instance=None, created=False, **kwargs):
    # if created:
        # Token.objects.create(user=instance)
