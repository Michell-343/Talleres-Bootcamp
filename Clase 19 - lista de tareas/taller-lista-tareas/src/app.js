import router from "./routes/tareasruta.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT; 
const DB_URI = process.env.DB_URL;

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, })

.then(()=> console.log('Conexion exitosa a la base de datos'))
.catch((error)=> console.log('Error de conexion a la base de datos:', error))

//importar las rutas del CRUD
//con esta ruta accedemos en el postman
app.use('/Tareas', router);  

//iniciar el servidor

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})

