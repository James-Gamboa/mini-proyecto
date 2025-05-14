from .models import Producto
from rest_framework import serializers  # type: ignore


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

    def validate_precio(self, value):
        if value <= 0:
            raise serializers.ValidationError(
                "El precio debe ser un número positivo.")
        return value

    def validate_cantidad(self, value):
        if value < 0:
            raise serializers.ValidationError(
                "La cantidad no puede ser negativa.")
        return value
