# Generated by Django 3.0.8 on 2023-05-16 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='gender',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
