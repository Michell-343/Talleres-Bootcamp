import mongoose from "mongoose";

const tareasSchema = new mongoose.Schema({

    tarea : {type:String, required: true},

})

const Tareas = mongoose.model('Tareas', tareasSchema) //cargar objetos

export default Tareas