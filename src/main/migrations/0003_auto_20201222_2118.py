# Generated by Django 3.1.4 on 2020-12-22 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20201222_1153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='likes',
            name='Like',
            field=models.IntegerField(default='None', max_length=20),
        ),
        migrations.AlterField(
            model_name='product',
            name='AllComments',
            field=models.ManyToManyField(to='main.Comments'),
        ),
        migrations.AlterField(
            model_name='product',
            name='AllLikes',
            field=models.ManyToManyField(to='main.Likes'),
        ),
    ]
