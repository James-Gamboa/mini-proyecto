import { Button } from "../atoms/button";

export function ProductCard({ producto, onEdit, onDelete }) {
  return (
    <li key={producto.id} className="border-b pb-2">
      <p className="font-medium">{producto.nombre}</p>
      <p className="text-sm text-gray-600">{producto.descripcion}</p>
      <p className="text-sm">Precio: ${producto.precio}</p>
      <p className="text-sm">Cantidad: {producto.cantidad}</p>
      <div className="flex space-x-2 mt-2">
        <Button
          onClick={() => onEdit(producto)}
          className="bg-yellow-500 text-white"
        >
          Editar
        </Button>
        <Button
          onClick={() => onDelete(producto.id)}
          className="bg-red-500 text-white"
        >
          Eliminar
        </Button>
      </div>
    </li>
  );
}
