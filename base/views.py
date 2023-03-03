from django.shortcuts import render
from django.http import HttpResponse
from .models import Room
from .models import HomeQuestions, GeneralUser, Question, Option


# Create your views here.

# rooms =[
#     {'id': 1, 'FormName': 'Please Submit 1st this form'},
#     {'id': 2, 'FormName': 'Please Submit 2nd this form'},
#     {'id': 3, 'FormName': 'Please Submit 3rd this form'}
# ]



def home(request):
    rooms = Room.objects.all()
    homeQuestions = HomeQuestions.objects.all()
    context = {'rooms':rooms, 'homeQuestions':homeQuestions}
    return render(request, 'home.html', context)



def room(request, pk):
    room = Room.objects.get(uid=pk)
    questions = Question.objects.filter(room=room).order_by('created')
    for question in questions:
        options = Option.objects.filter(question=question).order_by('created')
        question.options = options
    context = {'room':room, 'questions':questions}
    return render(request, 'room.html', context)


def createForm(request):
    context = {}
    return render(request, 'room-form.html', context)