from django.urls import path
# from rest_framework.authtoken.views import obtain_auth_token

from django.conf.urls import url
from .views import (ListProductView,
                    ProductViewById,
                    CreateProductView,
                    
                    CreateCommentsView,
                    # UpdateCommentsView,
                    DestroyCommentsView,
                    
                    # AddLikesView,
                    UpdateLikesView,
                    # DestroyLikesView,

                    checkUser,
                    login,
                    signup,
                    logout,
                    )

app_name = 'main'

urlpatterns = [
    path('',checkUser),
    path('login/',login),
    path('signup/',signup),
    path('logout/',logout),
    # path('obtain_auth_token',obtain_auth_token, name='generate_token'),

    path('productList/',ListProductView.as_view()),
    url(r'^product/(?P<pk>\d+)/$',ProductViewById.as_view(), name='ProductViewById'),
    #path('createProduct/',CreateProductView.as_view()),
    
    path('createComment',CreateCommentsView),
    #url(r'^updateComment/(?P<pk>\d+)/$',UpdateCommentsView.as_view(), name='UpdateCommentsView'),
    url(r'^destroyComment/(?P<pk>\d+)/$',DestroyCommentsView.as_view(), name='DestroyCommentsView'),
    
    #path('addLike/',AddLikesView.as_view()),
    path('updateLike',UpdateLikesView, name='UpdateLikesView'),
    #url(r'^destroyLike/(?P<pk>\d+)/$',DestroyLikesView.as_view(), name='DestroyLikesView'),
]
