const fs = require('fs')

const lectura_archivo = fs.readFileSync('texto.txt','utf-8')

fs.writeFileSync('texto2.txt',
    `1. Iniciar proyecto aja
    Opcion 1:proceso`
)

const intronode = fs.readFileSync('texto2.txt', 'utf-8')

const filemodif = intronode.replace(/gatos/ig, 'GATOS')

fs.writeFileSync('texto.txt', filemodif)

//console.log(lectura_archivo)
`` ``