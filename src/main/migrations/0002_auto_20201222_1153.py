# Generated by Django 3.1.4 on 2020-12-22 06:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='AllComments',
            field=models.ManyToManyField(null=True, to='main.Comments'),
        ),
        migrations.AlterField(
            model_name='product',
            name='AllLikes',
            field=models.ManyToManyField(null=True, to='main.Likes'),
        ),
    ]
