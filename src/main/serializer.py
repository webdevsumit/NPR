from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import (authenticate, 
                                    login,
                                    logout,
                                    )
from . models import Product, Comments, Likes

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'

class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    AllComments = CommentsSerializer(many=True)
    # AllLikes = LikesSerializer(many=True)
    class Meta:
        model = Product
        fields = ['id', 
                'product_name', 
                'Image',
                'launched_on',
                'AllComments',
                # 'AllLikes',
                'no_of_comments',
                'no_of_likes',
                'no_of_dislikes',
                'product_path',
                ]

class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 
                'product_name',
                'Image',
                'launched_on',
                'no_of_comments',
                'no_of_likes',
                'no_of_dislikes',
                ]


class CheckUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','password')
        extra_kwargs = {
            'password': {'write_only' : True}
        }

            

class SignupSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type' : 'password'}, write_only = True)
    
    class Meta:
        model = User
        fields =  ( 'username', 'email', 'first_name', 'last_name', 'password', 'password2')
        extra_kwargs = {
            'password': {'write_only':True}
        }

    def save(self):
        
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        
        if ((password != password2) or (len(password)<=7)): 
            return None


            
        user = User.objects.create_user(
            username = self.validated_data['username'],
            email = self.validated_data['email'],
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data['last_name'],
            password = password,
         )

        user.save()
        return user

   
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def doLogin(self,request):
        user = authenticate(
            username = self.validated_data['username'],
            password = self.validated_data['password']
        )
    
        if user is not None:
            login(request, user)
            return user
        raise serializers.ValidationError()

    
class LogoutSerializer(serializers.Serializer):
    username = serializers.CharField()
    data = {'message':'Unable to logout.'}
    def doLogout(self, request):
        logout(request)
        data = {'successMessage':'User logout successfully.'}
        return data
