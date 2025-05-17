"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Form } from "../components/molecules/form";
import { ProductCard } from "../components/organisms/productCard";

export default function ProductManager() {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
  });

  const [productos, setProductos] = useState([]);
  const [message, setMessage] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchProductos = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/productos/");
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error fetching productos:", error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleEdit = (producto) => {
    setEditingProduct(producto);
    setFormData({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      cantidad: producto.cantidad,
    });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setFormData({ nombre: "", descripcion: "", precio: "", cantidad: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingProduct
        ? `http://localhost:8000/api/productos/${editingProduct.id}/`
        : "http://localhost:8000/api/productos/";
      const method = editingProduct ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(
          editingProduct
            ? "Producto actualizado exitosamente."
            : "Producto agregado exitosamente."
        );
        setFormData({ nombre: "", descripcion: "", precio: "", cantidad: "" });
        setEditingProduct(null);
        fetchProductos();
      } else {
        setMessage(
          editingProduct
            ? "Error al actualizar el producto."
            : "Error al agregar el producto."
        );
      }
    } catch (error) {
      setMessage("Error de conexión con el servidor.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/productos/${id}/`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("Producto eliminado exitosamente.");
        fetchProductos();
      } else {
        setMessage("Error al eliminar el producto.");
      }
    } catch (error) {
      setMessage("Error de conexión con el servidor.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold title-pricedown">
            Gestión de Productos
          </CardTitle>
        </CardHeader>
        <CardContent>
          {message && (
            <p className="text-center text-red-500 mb-4">{message}</p>
          )}
          <Form
            onSubmit={handleSubmit}
            formData={formData}
            handleChange={handleChange}
          />
        </CardContent>
      </Card>

      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold title-pricedown">
            Lista de Productos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {productos.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}