from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting

import requests

# Create your views here.
def index(request):
    return render(request, 'index.html')

def datavisual(request):
    return render(request, 'datavisual.html')

def police(request):
    return render(request, 'policing.html')

def jail(request):
    return render(request, 'jail.html')

def court(request):
    return render(request, 'court.html')

def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, 'db.html', {'greetings': greetings})

