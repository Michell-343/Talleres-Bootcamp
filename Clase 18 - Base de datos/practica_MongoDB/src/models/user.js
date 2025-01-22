
const mongoose = require('mongoose')

//crear el objeto
const usuarioSchema = new mongoose.Schema({
    //creamos el esquema del usuario
    nombre : {type:String, required: true}, // ingresar nombre datos de tipo string y que debe ser obligatorio
    email : {type:String, required : true},
    telefono : {type:Number, required :true},
    edad: {type:Number, required :true},
})

//crear el modelo
const Usuarios = mongoose.model('Usuarios', usuarioSchema) // cargamos objetos

//exportar forma anterior
module.exports = Usuarios 