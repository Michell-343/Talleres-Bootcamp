//llamar el path express
const express =require('express')

const path = require('path')

//inicializar servidor
const iniciarServidor = (option) => {
    const {port, public_path = 'public'} = option //'public' es el nombre de la carpeta
 /*   console.log(port)
    console.log(public_path) Esto mostraria los datos*/

    const app = express()

//hacer las peticiones, en este caso datos estaticos
    app.use(express.static(public_path))

    app.get('/',(req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)  //el join normaliza argumento y los une
        res.sendFile(indexPath) // archivo a enviar
    })

    //mostrar la pagina, se ejecuta
    app.listen(port,()=>{
        console.log(`ejecutando el servidor en el puerto ${port}`)
    })
}


//exportar servidor

module.exports = {
    iniciarServidor
}