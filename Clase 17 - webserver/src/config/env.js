require ('dotenv').config()
const {get} = require ('env-var')

// envs es un objeto
const envs = { 
    PORT: get('PORT').required().asPortNumber(), //traer como valor numerico
    PUBLIC_PATH: get ('PUBLIC_PATH').default('public').asString() //traer como caracteres
}


// exportar forma anterior
module.exports = {
    envs  
}