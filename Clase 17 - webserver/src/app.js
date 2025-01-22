/* forma anterior
const { envs } = require ('./config/env')  //importar forma anterior
const {iniciarServidor} = require  ('./server/server')  //importar servidor
*/

import {envs} from './config/env.js'  //importar forma actual
import {iniciarServidor} from './server/server.js'  //importar servidor

//hay que llamarla antes
//aqui trabajamos nuestrasvariables de entorno
const main =() => {
    iniciarServidor ({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
    console.log("Inicializando servidor")
}

//funcion anonima asincronica y autoconvocada
(async  () => {
    main()
})()

