import { config } from "dotenv";
import env from 'env-var';

config()

const PORT = env.get('PORT').asPortNumber()
const CURSO = env.get('CURSO').asPortNumber()
const DB_PASSWORD = env.get('DB_PASSWORD').asIntPositive();


console.log(PORT)
console.log(CURSO)
console.log(DB_PASSWORD)


/* console.log(process.env.PORT); //env.PORT muestra el  puerto
console.log(process.env.DB_USER); //env. muestra el usuario
console.log(process.env.DB_PASSWORD); //env. muestra la contraseña  */
