from django.http import Http404, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import RegisterForm, LoginForm


class CheckLogin:
    @staticmethod
    def is_logged_in(user):
        return user.is_authenticated


def login_user(request):
    if CheckLogin().is_logged_in(request.user):
        return redirect('/')
    form = LoginForm()
    if request.method == "POST":
        username = request.POST['email']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "Successfully Logged in !!")
            return redirect('/')
        else:
            messages.warning(request, "Username or Password Incorrect !!")
    return render(request, 'login.html', {"form": form})


def register(request):
    if CheckLogin().is_logged_in(request.user):
        return redirect('/')
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Registration Successful")
            return redirect("authentication_app:login")
    else:
        form = RegisterForm()
    return render(request, 'register.html', {"form": form})


@login_required
def logout_user(request):
    logout(request)
    messages.success(request, "Logged out")
    return redirect('/auth/login/')
