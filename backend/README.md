# CarwashFreaks Backend

Sistema de microservicios para la gestión de CarwashFreaks.

## Arquitectura

El backend está compuesto por 4 microservicios:

- **Gateway API** (Puerto 3000): Punto de entrada único que actúa como proxy hacia los demás servicios
- **Users API** (Puerto 3002): Gestión de usuarios y autenticación (MongoDB Atlas)
- **Appointments API** (Puerto 3001): Gestión de citas (MongoDB Atlas)
- **Services API** (Puerto 3003): Gestión de servicios disponibles (MongoDB Atlas)

## Requisitos Previos

- Node.js
- MongoDB Atlas cluster configurado
- npm

## Configuración

1. **Configurar MongoDB Atlas**:
   - Crear un cluster en MongoDB Atlas
   - Crear 3 bases de datos: `carwash_users`, `carwash_appointments`, `carwash_services`
   - Obtener la connection string y configurar en cada `.env`

### Estructura de Carpetas

Cada API sigue la estructura:
```
api-name/
├── config/          # Configuraciones
├── controllers/     # Controladores de rutas
├── middlewares/     # Middlewares personalizados
├── models/          # Modelos de datos (Mongoose)
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
├── app.js           # Configuración de Express
├── server.js        # Conexión DB y levantamiento del servidor
├── package.json     # Dependencias
└── .env.example     # Variables de entorno de ejemplo
```

### Seguridad Implementada

- **Helmet**: Headers de seguridad
- **CORS**: Configurado para el frontend
- **Rate Limiting**: Protección contra ataques DDoS
- **Input Validation**: Usando Joi
- **Error Handling**: Manejo centralizado de errores

### Base de Datos

- **Todas las APIs**: MongoDB Atlas con Mongoose
- **Separación por colecciones**: Cada API maneja su propia base de datos
- **Conexión segura**: Uso de connection strings con autenticación

## Scripts Disponibles

En cada API:
- `npm start`: Ejecutar en producción
- `npm run dev`: Ejecutar en desarrollo con nodemon
