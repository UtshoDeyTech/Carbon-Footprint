# Generated by Django 4.1.7 on 2023-03-02 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_homequestions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homequestions',
            name='answer',
            field=models.CharField(max_length=500),
        ),
    ]
