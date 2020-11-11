from django import forms
from .models import User
from django.contrib.auth.forms import UserCreationForm


class RegisterForm(UserCreationForm):
    first_name = forms.CharField(min_length=6, max_length=150, required=True,
                                 help_text="Minimum Length 6, Max Length 150",
                                 widget=forms.TextInput(attrs={
                                     "class": "form-control",
                                     "id": "first_name"
                                 }))
    last_name = forms.CharField(min_length=6, max_length=150, required=True,
                                help_text="Minimum Length 6, Max Length 150",
                                widget=forms.TextInput(attrs={
                                    "class": "form-control",
                                    "id": "last_name"
                                }))
    email = forms.EmailField(required=True)
    email.widget.attrs.update({"class": "form-control", "id": "email"})
    password1 = forms.CharField(min_length=8, max_length=150, label="Password", required=True,
                                help_text="Minimum Length 8 Maximum Length 150",
                                widget=forms.PasswordInput(attrs={
                                    "class": "form-control",
                                    "id": "password1"
                                }))
    password2 = forms.CharField(min_length=8, max_length=150, label="Confirm Password", required=True,
                                widget=forms.PasswordInput(attrs={
                                    "class": "form-control",
                                    "id": "password2"
                                }))

    # def clean(self):
    #     cleaned_data = super(RegisterForm, self).clean()
    #     email = cleaned_data.get('email')
    #     has_email = User.objects.filter(email=email)
    #     if has_email.exists():
    #         print(f"email {email} already exists")
    #         raise forms.ValidationError("Email Already Exists")
    #     return cleaned_data

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password1', 'password2',)


class LoginForm(forms.ModelForm):
    email = forms.EmailField(required=True)
    email.widget.attrs.update({
        "class": "form-control",
        "id": "email"
    })
    password = forms.CharField(max_length=150,
                               widget=forms.PasswordInput(attrs={
                                   "class": "form-control",
                                   "id": "password"
                               }))

    class Meta:
        model = User
        fields = ('email', 'password',)
