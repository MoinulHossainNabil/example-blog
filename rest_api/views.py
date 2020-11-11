from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.generics import ListAPIView
from authentication.models import User
from .serializers import UserSerializer


class MyTokenObtainSerilizer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Customize response dictionary with extra data
        data['email'] = self.user.email
        data['user_id'] = self.user.pk
        data['message'] = "login successful"

        return data


class LoginViewSimpleJWT(TokenObtainPairView):
    """ Generates token for the user to login"""
    """ Call this view to by passing email and password in json format using post method
        and we can then use the returned <access> token as Authorization Bearer Token passed in headers to login"""
    serializer_class = MyTokenObtainSerilizer


class UserRegisterView(APIView):
    """ Creates new user"""
    parser_classes = (FormParser, JSONParser)

    def post(self, request, *args, **kwargs):
        required_fields = ['email', 'first_name', 'last_name', 'password1', 'password2']
        post_data = dict(request.data)
        
        # Check if any field is missing
        for field in required_fields:
            if field not in post_data:
                return Response({"response": f"{field} must be set"}, status=status.HTTP_400_BAD_REQUEST)

        email = User.objects.filter(email=post_data['email'])
        if email.exists():
            return Response({"response": "email already exists"}, status=status.HTTP_400_BAD_REQUEST)
        first_name = post_data['first_name']
        last_name = post_data['last_name']
        if post_data['password1'] != post_data['password2']:
            return Response({"response": "Passwords don't match"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            email=post_data['email'],
            first_name=post_data['first_name'],
            last_name=post_data['last_name'],
            password=post_data['password1']
        )

        new_user = {
            "response": "Your Registration Is Successful",
            "id": user.id,
            "name": user.first_name,
            "email": user.email
        }
        user.set_password(post_data['password1'])
        user.save()
        return Response(new_user, status=status.HTTP_200_OK)


class GetUsers(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
