from django.contrib import admin

# Register your models here.
from .models import Arrest
admin.site.register(Arrest)
from .models import Greeting
admin.site.register(Greeting)
