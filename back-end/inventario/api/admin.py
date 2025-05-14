from django.contrib import admin
from django.contrib.auth.models import Group

from .models import Producto

admin.site.register(Producto)


def create_default_roles():
    roles = ['admin', 'empleado', 'cliente']
    for role in roles:
        Group.objects.get_or_create(name=role)

# create_default_roles()  # Comentado para evitar acceso a la base de datos durante la inicialización
