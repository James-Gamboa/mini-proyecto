from django.shortcuts import render # type: ignore
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView  # type: ignore
from .models import Producto
from .serializers import ProductoSerializer
from .permissions import IsInGroup
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class UserRegistrationView(APIView):
    permission_classes = []  

    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully."}, status=status.HTTP_201_CREATED)
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    

class ProductoListCreateView(ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer


class ProductoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
