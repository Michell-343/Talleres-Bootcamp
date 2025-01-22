const fs = require('fs')

fs.writeFileSync('datos.txt', `Bienvenido al manejo de archivos Node ;-;`)

const leerarchivo = fs.readFileSync('datos.txt', 'utf-8');

fs.appendFileSync('datos.txt','Este documento ha sido actualizado')

fs.renameSync('datos.txt','archivo_actualizado.txt')









/* const lectura_archivo = fs.readFileSync('texto.txt', 'utf-8') //lectura de archivo

fs.writeFileSync('texto.txt', `Los gatos son perfectos`)

const intronode = fs.readFileSync('.texto2', 'utf-8')

const filemodif = lectura_archivo.replace(/gatos/ig, 'GATOS');

fs.writeFileSync('texto.txt', filemodif)

console.log(lectura_archivo)
//console.log(intronode)  */
