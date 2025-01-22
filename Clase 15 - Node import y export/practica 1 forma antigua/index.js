console.log("hola mundo")

const { obtenerTitulo, obtenerDocente } = require('./funcion') //Se importó de forma desetructurada
const { boot } = require('./objetos')

// const fun = require('./funcion')   //forma estructurada
// const obt = require('./objetos')  //forma estructurada
// es necesaro colocar  ./ y un const para que ejecute. 

const {cursoboot, dificultad, nivel} = boot

console.log(obtenerTitulo())  
console.log(obtenerDocente('Jhonatan','Devrier')) //('Jhonatan','Devrier') esto es mandar dos parametros
console.log(cursoboot)
console.log("La dificultad del curso es", dificultad)
console.log("El nivel es", nivel)

/* console.log(fun.obtenerTitulo())  
console.log(fun.obtenerDocente('Jhonatan','Devrier')) */ //con la forma estructurada, debe llevar el fun, que es la constante declarada

/*
import {Titulo, suma} from "./funcion.js";
console.log(Titulo());
console.log(suma(15,18)) */