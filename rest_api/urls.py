from django.contrib import admin
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt

from rest_framework_simplejwt import views as jwt_views

from .views import UserRegisterView, LoginViewSimpleJWT, GetUsers

app_name = 'rest_api_app'

urlpatterns = [
    path('register/', UserRegisterView.as_view()),
    path('login/', LoginViewSimpleJWT.as_view(), name='token_obtain_pair'),
    path('refresh_token/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('get_users/', GetUsers.as_view(), name='get_user_api'),
]

