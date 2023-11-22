from django.contrib import admin

# Register your models here.
from .models import *
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question','op1','op2','op3','op4','ans','hint')
admin.site.register(Question, QuestionAdmin)

class PromptedAdmin(admin.ModelAdmin):
    list_display = ('question_number','option_click_time','help_button_click_time','continue_button_click_time','time_spent_on_question')
admin.site.register(Prompted, PromptedAdmin)

class UnpromptedAdmin(admin.ModelAdmin):
    list_display = ('question_number','option_click_time','help_button_click_time','continue_button_click_time','time_spent_on_question')
admin.site.register(Unprompted, UnpromptedAdmin)

class NoAssistanceAdmin(admin.ModelAdmin):
    list_display = ('question_number','option_click_time','help_button_click_time','continue_button_click_time','time_spent_on_question')
admin.site.register(NoAssistance, NoAssistanceAdmin)