from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('other-sites/', views.other_sites, name='other_sites'),
    path('new-essays/', views.new_essays, name='new_essays'),
    path('impressum/', views.impressum, name='impressum'),
    path('pong/', views.pong, name='pong'),
]