# Inventario API

## Descripción

El proyecto **Inventario API** es una aplicación de gestión de inventarios que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos. La aplicación incluye un backend desarrollado en Django y un frontend desarrollado en Next.js. Los datos se almacenan en una base de datos MySQL.

## Características

- **Backend**: API RESTful desarrollada con Django para gestionar productos.
- **Frontend**: Interfaz de usuario moderna y responsiva creada con Next.js y componentes de Shadcn-UI.
- **Base de datos**: Integración con MySQL para almacenamiento de datos.
- **Validación**: Validación de datos en el backend para garantizar la integridad de los datos.
- **Documentación**: Documentación de la API generada con Postman.


## Uso

1. Accede al frontend en tu navegador en `http://localhost:600000`.
2. Usa la interfaz para agregar, listar, actualizar y eliminar productos.


### Endpoints principales

- **GET** `/api/productos/`: Lista todos los productos.
- **POST** `/api/productos/`: Crea un nuevo producto.
- **PUT** `/api/productos/{id}/`: Actualiza un producto existente.
- **DELETE** `/api/productos/{id}/`: Elimina un producto.

## Uso de la API

La API de Inventario permite realizar operaciones CRUD sobre productos. A continuación, se presentan ejemplos de cómo usar los endpoints principales:

### Obtener todos los productos

**Endpoint:**
```
http://localhost:8000/api/productos/
GET /api/productos/
```

**Ejemplo de respuesta:**
```json
[
  {
    "id": 1,
    "nombre": "Grand Theft Auto VI",
    "descripcion": "Es un próximo videojuego de acción-aventura de mundo abierto desarrollado por Rockstar Games",
    "precio": 80000,
    "cantidad": 100
  },
  {
    "id": 2,
    "nombre": "Grand Theft Auto IV ",
    "descripcion": "Es la sexta entrada principal de la serie Grand Theft Auto, después de Grand Theft Auto: San Andreas",
    "precio": 6000,
    "cantidad": 50
  }
]
```

### Crear un nuevo producto

**Endpoint:**
```
POST http://localhost:8000/api/productos/
```

**Cuerpo de la solicitud:**
```json
{
  "nombre": "Grand Theft Auto VI",
  "descripcion": "Es un próximo videojuego de acción-aventura de mundo abierto desarrollado por Rockstar Games",
  "precio": 80000,
  "cantidad": 100
}
```

**Ejemplo de respuesta:**
```json
{
  "id": 3,
  "nombre": "Grand Theft Auto VI",
  "descripcion": "Es un próximo videojuego de acción-aventura de mundo abierto desarrollado por Rockstar Games",
  "precio": 80000,
  "cantidad": 100
}
```

### Actualizar un producto existente

**Endpoint:**
```
PUT /api/productos/{id}/
http://localhost:8000/api/productos/1/
```

**Cuerpo de la solicitud:**
```json
{
  "nombre": "Grand Theft Auto IV",
  "descripcion": "Es la sexta entrada principal de la serie Grand Theft Auto, después de Grand Theft Auto: San Andreas",
  "precio": 6000,
  "cantidad": 50
}
```

**Ejemplo de respuesta:**
```json
{
  "id": 3,
  "nombre": "Grand Theft Auto IV ",
  "descripcion": "Es la sexta entrada principal de la serie Grand Theft Auto, después de Grand Theft Auto: San Andreas",
  "precio": 6000,
  "cantidad": 50
}
```

### Eliminar un producto

**Endpoint:**
```
DELETE /api/productos/{id}/
http://localhost:8000/api/productos/1/
```

**Ejemplo de respuesta:**
```json
{
  "message": "Producto eliminado exitosamente."
}
```

## Pruebas

### Backend

Puedes probar los endpoints de la API usando Postman o cualquier cliente HTTP como cURL.

### Frontend

Realiza pruebas manuales en el navegador para verificar la funcionalidad de la interfaz.

## Frontend

Además de interactuar con la API directamente, el frontend permite realizar todas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) desde la interfaz de usuario. Esto incluye:

- **Crear productos**: A través de un formulario en la interfaz.
- **Listar productos**: Visualización de todos los productos en una lista.
- **Actualizar productos**: Edición de productos existentes mediante un formulario prellenado.
- **Eliminar productos**: Eliminación de productos con un solo clic.

La interfaz del cliente igualmente es responsiva sea facil acceder cualquier dispositivo