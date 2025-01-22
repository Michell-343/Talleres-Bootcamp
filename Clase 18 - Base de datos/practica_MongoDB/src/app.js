const express = require('express') //importar forma anterior
const mongoose = require('mongoose')

//manejador de eventos
require('dotenv').config()

const Usuarios = require('./models/user') //en la forma anterior va sin el .js

//iniciar metodo, peticiones con app

const app = express()

//leer el archivo .json, base de datos no relacional
app.use(express.json())

//conectar base de datos
mongoose.connect(process.env.DB_URI, {
    //parsear el url
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//comprobar que se haya conectado la base de datos
.then(()=> console.log('Conexion exitosa a la base de datos'))

//manejar errores y mostrarlos
.catch((error)=> console.log('Error de conexion a la base de datos:', error)) 

//crear el crud: crear, leer, actualizar, eliminar. 
// create, read, update, delete
//post, get, put, delete


//POST
app.post('/Usuarios', async(req, res)=>{
    //manejo de secciones-errores. Try y catch
    try{
        //hacer el envío
        //deconstruir el contenido
        const {nombre, email, telefono, edad} = req.body //se requiere un body para enviar por metodo post
        const nuevoUsuario = new Usuarios({nombre, email, telefono, edad}) //argumentos del usuario, aqui los creamos
        //el await siembre debe estar con funciones async
        await nuevoUsuario.save(); //guardar en base de datos, original deo mongoose
        res.status(201).json({
            message:'Usuario creado con éxito', usuario : nuevoUsuario
        }) //dar una respuesta con el codigo 201
   
       } catch(error){
        res.status(500).json({
            message:'Error. Usuario no creado', error
        }) 
       } //si hay un error, aqui se maneja
})

//GET
app.get('/Usuarios', async(req, res)=>{
    try{
        const user = await Usuarios.find()
        res.status(200).json(user) // exito

    } catch(error){
        res.status(500).json({
            message:'Erros al obtener usuario', error
        }) 
    }
})

console.log(process.env.DB_URI)

//mostar consola
const PORT = process.env.PORT

app.listen(PORT, ()=>{console.log(`Servidor escuchando en el puerto ${PORT}`)})


