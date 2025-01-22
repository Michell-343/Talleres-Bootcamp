/* Forma anterior
require ('dotenv').config()
const {get} = require ('env-var')
*/

 //forma nueva
import env from 'dotenv'
import envar from 'env-var'

//traer variables d eentorno del process
env.config() 

// envs es un objeto
// esta constante puede variar
export const envs = { 
    //.get para que la variable tome el metodo
    PORT: envar.get('PORT').required().asPortNumber(), //traer como valor numerico
    PUBLIC_PATH: envar.get ('PUBLIC_PATH').default('public').asString() //traer como caracteres
}


/* exportar forma anterior
module.exports = {
    envs  
}
    */