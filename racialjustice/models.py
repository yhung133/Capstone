from django.db import models

# Create your models here.
class Greeting(models.Model):
    when = models.DateTimeField('date created', auto_now_add=True)

class Arrest(models.Model):
    arrestee_id = models.IntegerField()
    arrest_date = models.DateField()
    arrest_time = models.TimeField()
    arrest_code = models.TextField()
    arrest_location = models.TextField()
    crime_code = models.TextField()
    crime_code_description = models.TextField()
    crime_code_category = models.TextField()
    crime_code_category_description = models.TextField()
    weapon_code_1 = models.CharField(max_length=30)
    weapon_code_2 = models.CharField(max_length=30)
    weapon_code_3 = models.CharField(max_length=30)
    race = models.TextField()
    sex = models.TextField()
    age = models.IntegerField()
    employment_code = models.CharField(max_length=30)
    arrest_officer_code = models.IntegerField()
    result = models.TextField()
    jurisdiction = models.TextField()
    more_than_one_charge = models.IntegerField()
    mvo = models.IntegerField()


class Jailbook(models.Model):
    book_date = models.DateField(null=True)
    book_time = models.TextField(null=True)
    birth_date = models.DateField(null=True)
    age = models.IntegerField(null=True)
    gender = models.TextField(null=True)
    race = models.TextField(null=True)
    number = models.TextField(null=True)
    direction = models.CharField(max_length=30,null=True)
    street = models.TextField(null=True)
    suffix = models.CharField(max_length=30,null=True)
    city = models.TextField(null=True)
    state = models.TextField(null=True)
    zipcode = models.TextField(null=True)
    statute = models.TextField(null=True)
    description = models.TextField(null=True)
    court_date = models.DateField(null=True)
    release_date = models.DateField(null=True)
    bond = models.FloatField(null=True)

    
    
    