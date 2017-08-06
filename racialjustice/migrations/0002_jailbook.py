# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-08-06 22:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('racialjustice', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Jailbook',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('book_date', models.DateField()),
                ('book_time', models.TextField()),
                ('birth_date', models.DateField()),
                ('age', models.IntegerField()),
                ('gender', models.TextField()),
                ('race', models.TextField()),
                ('number', models.IntegerField()),
                ('direction', models.CharField(max_length=30)),
                ('street', models.TextField()),
                ('suffix', models.CharField(max_length=30)),
                ('city', models.TextField()),
                ('state', models.TextField()),
                ('zipcode', models.IntegerField()),
                ('statute', models.TextField()),
                ('description', models.TextField()),
                ('court_date', models.DateField()),
                ('release_date', models.DateField()),
                ('bond', models.FloatField()),
            ],
        ),
    ]
