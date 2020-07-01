from django.db import models

# Create your models here.


class Person(models.Model):
    name = models.CharField(max_length=30, null=True)
    phone = models.CharField(max_length=30, null=True)
    email = models.CharField(max_length=30, null=True)
    date_created = models.DateTimeField(auto_now_add=True)
