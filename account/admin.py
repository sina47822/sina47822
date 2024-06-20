from django.contrib import admin

from django.contrib.auth.admin import UserAdmin

from account.models import Profile, User 

class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('email','is_superuser', 'is_active')
    list_filter = ('email','is_superuser', 'is_active')
    search_fields = ('email',)
    ordering = ('email',)

    fieldsets = (
        ('Authentication', {
            "fields": (
                'email' , 'password'
            ),
        }),
        ('Permissions', {
            "fields": (
                'is_active' , 'is_staff' , 'is_superuser'
            ),
        }),
        ('Group Permissions', {
            "fields": (
                'groups' , 'user_permissions'
            ),
        }),
        ('Important Date', {
            "fields": (
                'last_login',
            ),
        }),
    )

    add_fieldsets = (
        (None,{
            'classes' :('wide',),
            'fields': ('email','password1','password2','is_active' , 'is_staff' , 'is_superuser')
        }

        ),
    )

admin.site.register(User ,CustomUserAdmin)
admin.site.register(Profile)