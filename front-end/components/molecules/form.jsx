import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { Button } from "../atoms/button";

export function Form({ onSubmit, formData, handleChange }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre del producto"
          required
        />
      </div>
      <div>
        <Label htmlFor="descripcion">Descripción</Label>
        <Input
          type="text"
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="Descripción del producto"
          required
        />
      </div>
      <div>
        <Label htmlFor="precio">Precio</Label>
        <Input
          type="number"
          id="precio"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          placeholder="Precio del producto"
          required
        />
      </div>
      <div>
        <Label htmlFor="cantidad">Cantidad</Label>
        <Input
          type="number"
          id="cantidad"
          name="cantidad"
          value={formData.cantidad}
          onChange={handleChange}
          placeholder="Cantidad disponible"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        {formData.id ? "Actualizar Producto" : "Agregar Producto"}
      </Button>
    </form>
  );
}
