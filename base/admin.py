from django.contrib import admin
from .models import *

class OptionAdmin(admin.StackedInline):
    model = Option

class QuestionAdmin(admin.ModelAdmin):
    inlines = [OptionAdmin]

admin.site.register(Room)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Option)
admin.site.register(HomeQuestions)
admin.site.register(GeneralUser)