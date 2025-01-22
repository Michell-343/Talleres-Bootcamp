/* forma anterior
const { obtenerTitulo, obtenerDocente } = require('./funcion') 
const { boot } = require('./objetos')
*/


import { obtenerDocente,obtenerTitulo } from "./funcion.js"
import { boot } from "./objetos.js" //necesita la extension .js

const {cursoboot, dificultad, nivel} = boot
console.log(obtenerTitulo())  
console.log(obtenerDocente('Jhonatan','Devrier')) 
console.log(cursoboot)
console.log("La dificultad del curso es", dificultad)
console.log("El nivel es", nivel) 



