// Importa los módulos necesarios para configurar y ejecutar el servidor.
import express from 'express'; // Framework para crear aplicaciones web y manejar solicitudes HTTP.
import bodyParser from 'body-parser'; // Middleware para analizar los datos enviados en el cuerpo de las solicitudes.
import cors from 'cors'; // Middleware para habilitar el acceso a la API desde dominios externos (política CORS).
import dotenv from 'dotenv'; // Carga las variables de entorno desde un archivo .env.
import path from 'path'; // Módulo para manejar y resolver rutas de archivos y directorios.
import { fileURLToPath } from 'url'; // Convierte las URLs de los módulos en rutas de archivos.

import userRoutes from './routes/users.js'; // Importa las rutas definidas en el archivo `users.js` para gestionar usuarios.


// Configuración para obtener la ruta del directorio actual del archivo (ES Modules no tienen `__dirname` por defecto).
const __filename = fileURLToPath(import.meta.url); // Obtiene la ruta completa del archivo actual.
const __dirname = path.dirname(__filename); // Obtiene el directorio del archivo actual.

dotenv.config(); // Carga las variables de entorno definidas en el archivo `.env`.

// Crea una instancia de Express para configurar la aplicación web.
const app = express();

// Define el puerto en el que se ejecutará el servidor, obteniéndolo desde las variables de entorno o usando 3000 por defecto.
const PORT = process.env.PORT || 3000;

// **Middlewares**
// Configura el middleware para analizar datos en formato JSON enviados en las solicitudes.
app.use(bodyParser.json());

// Habilita el middleware CORS para permitir solicitudes desde otros orígenes.
app.use(cors());

// Sirve archivos estáticos desde la carpeta `public`.
app.use(express.static(path.join(__dirname, 'public')));

// **Rutas**
// Usa las rutas definidas en `users.js` para manejar las solicitudes que comienzan con `/api/users`.
app.use('/api/users', userRoutes);

// Define la ruta raíz (`/`) para enviar el archivo `index.html` ubicado en la carpeta `public`.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Envía el archivo HTML al cliente.
});

// Inicia el servidor y lo pone a escuchar en el puerto especificado.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`); // Muestra un mensaje en la consola indicando que el servidor está en ejecución.
});

