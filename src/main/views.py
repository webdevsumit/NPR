from django.shortcuts import render, redirect

from django.contrib.auth.models import User 
from django.contrib.auth import (authenticate, 
                                    login,
                                    logout,
                                    )

from . models import Product, Comments, Likes
from . serializer import (ProductSerializer, 
                            CommentsSerializer, 
                            LikesSerializer,
                            ProductListSerializer,
                            CheckUserSerializer,
                            SignupSerializer,
                            LoginSerializer,
                            LogoutSerializer,
                            )
                            
from rest_framework import generics
from rest_framework.decorators import api_view   , permission_classes
from rest_framework.response import Response
from rest_framework import status

from rest_framework.permissions import IsAuthenticated
#from rest_framework.authentication import BasicAuthentication, SessionAuthentication
# Create your views here.

@api_view([ 'POST'])
def checkUser(request):
    if request.method=='POST':
        if request.data['user'] != '':
            data = User.objects.get(username=request.data['user'])
            serializerClass = CheckUserSerializer(data)
            return Response(serializerClass.data)
        return Response({'username':0})


@api_view(['POST'])
#@permission_classes((IsAuthenticated,))
def login(request):
    if request.method=='POST':
        serializerClass = LoginSerializer(data = request.data)
        data = {}
        if serializerClass.is_valid():
            user= serializerClass.doLogin(request)
            data['user'] = user.username
            data['successMessage']='User logined successfully.'
            return Response(data)
        return Response({'message':'Somethinng is wrong, unable to login.'})


@api_view(['POST',])
def signup(request):
    if request.method == 'POST':
    
        serialized_data = SignupSerializer(data = request.data)
        data={}
        
        if serialized_data.is_valid():
            user = serialized_data.save()
            
            if user is None:
                data['message']='Passwords must match & haven 8 character with integer.'
            else:
                data['successMessage']='User created successfully.'
        else:  
            data = serialized_data.errors
            data['message']='Something is wrong.'
        return Response(data)
            


@api_view(['POST'])
def logout(request):
    if request.method == 'POST':
        serialized_data = LogoutSerializer(data = request.data)
        if serialized_data.is_valid():
            data= serialized_data.doLogout(request)
            return Response(data)
        return Response({'message':'Unable'})
    
# Handling product event


class ListProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class  = ProductListSerializer

class ProductViewById(generics.RetrieveAPIView):
    #lookup_field = 'id'
    queryset = Product.objects.all()
    serializer_class  = ProductSerializer

class CreateProductView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class  = ProductSerializer
        

# Handling comments

@api_view(['POST'])
def CreateCommentsView(request):
    if request.method=='POST':
        data = request.data
        product = Product.objects.get(id=data['ProductId'])
        com = Comments.objects.create(Username=data['Username'],Comment=data['Comment'])
        com.save()
        product.AllComments.add(com)
        product.save()
        data.pop('ProductId')
        data['id']=com.id
        serializer_class = CommentsSerializer(data)
        return Response(serializer_class.data)
        

# class UpdateCommentsView(generics.UpdateAPIView):
    # queryset = Comments.objects.all()
    # serializer_class  = CommentsSerializer

class DestroyCommentsView(generics.RetrieveDestroyAPIView):
    queryset = Comments.objects.all()
    serializer_class  = CommentsSerializer
# Handling likes

# class AddLikesView(generics.CreateAPIView):
    # queryset = Likes.objects.all()
    # serializer_class  = LikesSerializer

@api_view(['POST'])
def UpdateLikesView(request):
    if request.method == 'POST':
        data = request.data

        
        if(Likes.objects.filter(Username=data['Username']).exists()):
            likes = Likes.objects.filter(Username=data['Username'])
            for searchingLike in likes:
                foundLike = searchingLike.product_set.filter(id=data['ProductId'])
                if foundLike.exists():
                    like = searchingLike
                    break


        
        like.Like = int(data['Like'])
        like.save()
        product = Product.objects.get(id=data['ProductId'])
        if ((product.AllLikes.filter(Username=data['Username']).exists())==False):
            product.AllLikes.add(like)
            product.save()
        sendData = {'no_of_likes':str(product.no_of_likes()),
                'no_of_dislikes':str(product.no_of_dislikes())}
        return Response(sendData)

# class DestroyLikesView(generics.DestroyAPIView):
    # queryset = Likes.objects.all()
    # serializer_class  = LikesSerializer

