//cambiar el texto de un h2, usando un boton
const modificar = document.getElementById("modificar"); // contante porque no cambiará con la interacion del programa
const cambiar = document.getElementById("cambiar"); //llama el id
const cambiar2 = document.getElementById("cambiar2"); // llama la clase

cambiar.addEventListener('click',()=>[
    modificar.textContent = "Archivo modificado"
])
cambiar2.addEventListener('click',()=>[
    modificar.textContent = "Modificar de texto"
])


// cambiar color de los elementos de una lista
const color1 = document.getElementsByClassName("color1");
const boton = document.getElementById("cambiar3");

boton.addEventListener('click',()=>{
    //iterar para recorrer los elementos de la lista
    for (let i=0; i<color1.length; i++){
        color1[0].style.color="blue";
        color1[2].style.color="blue";   //en el [], [i], modifica el color de todos, [0]: modifica el primero. [1], modifica el segundo, etc
    }
})

//practicar cada uno de los métodos del DOM, para añadir interactividad. 

// actividad 3 Inner HTML

const clase = document.getElementById("contenedor");
const boton2 = document.getElementById("cambiar4")
s
boton2.addEventListener('click', ()=>{
    clase.innerHTML = `
    <h2> Departamentos de colombia </h2>
    <p> otro texto para el parrafo</p>
    
    `

})

// ejemplo 7
const imagen = document.getElementById('imagenes');

document.addEventListener('keydown', (evento)=>{
    if(evento.key === 'd'){
        imagen.setAttribute('src', 'allstaroja.jpg');
    }else if(evento.key === 'f'){
        imagen.setAttribute('src', 'allstarnegra.jpg');
    }
})
