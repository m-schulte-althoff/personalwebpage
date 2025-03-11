from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def other_sites(request):
    return render(request, 'other-sites.html')

def new_essays(request):
    return render(request, 'new-essays.html')

def impressum(request):
    return render(request, 'impressum.html')

def pong(request):
    return render(request, 'pong.html')