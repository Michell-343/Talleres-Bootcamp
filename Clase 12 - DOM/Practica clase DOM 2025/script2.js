const div = document.getElementById('midiv');

const boton = document.getElementById('cambiar');

let con = 1;

boton.addEventListener('click', ()=>{

if(con == 1){
    div.textContent = "Se modifica el contenido";
    div.style.color = "red";
    con = 2;
} else if (con == 2){
    div.textContent = "Curso de programación";
    div.style.color = "black";
    con = 1;
} 
}) 

const lista1 = document.getElementsByClassName('lista');
const boton2 = document.getElementById('cambiar2');

boton2.addEventListener('click',()=>{

//modifica un elemento de la lista

  /*  lista1[2].textContent = "Sapo";
    lista1[2].style.color = "blue";  */  


//modifica todos los elemento de la lista, usando
//el for para reccorrer todo el arreglo.
        for(let i=0; i<lista1.length; i++){
            lista1[i].style.color ="orange";
        }  
})


// modificar elementos por etiqueta
const etiqueta = document.getElementsByTagName('p');

const boton3 = document.getElementById('cambiar3');

boton3.addEventListener('click', ()=>{
    for(let i=0; i<etiqueta.length; i++){
        etiqueta[0].style.backgroundColor = "green";
        etiqueta[1].style.color = "white";
        etiqueta[i].style.transition = "all 3s ease";
        etiqueta[i].style.fontSize = "25px";
    }
})

// modificar primer elemento

const selector = document.querySelector('#midiv3');
const selector1 = document.querySelector('.lista2');
const selector2 = document.querySelector('p');

const boton4 = document.getElementById('cambiar4');

boton4.addEventListener('click',()=>{
    selector.style.color = "blue";
    selector1.style.fontSize = "30px";
    selector2.style.backgroundColor = "red";
    
})


// modificar varios elementos Ejemplo 5
const selectorall = document.querySelectorAll('p');
const selectorall1 = document.querySelectorAll('.lista');

const boton5 = document.getElementById('cambiar5');

boton5.addEventListener('click', ()=>{
    selectorall.forEach((item) => {
        item.style.backgroundColor = "green";
        item.style.color = "white";
        item.style.transform = "rotate(2deg)";
    });
    selectorall1.forEach((item2)=>{
        item2.style.fontWeight = "bold";
    })
}) 


// añadir elementos Ejemplo 6

const crear = document.getElementById('ListaPadre');

const boton6 = document.getElementById('añadir');

const eliminar = document.getElementById('eliminar');

boton6.addEventListener('click', ()=>{
    const crearItem = document.createElement('li');
    crearItem.textContent = "Gallina";
    crear.appendChild(crearItem);

    //notificacion que aparece en el body

    const notificacion = document.createElement('div');
    notificacion.textContent = "Elemento agregado con exito"
    notificacion.style.position = "fixed";
    notificacion.style.backgroundColor = "red";
    notificacion.style.color = "white";
    notificacion.style.padding  = "10px";
    notificacion.style.top  = "50%";
    notificacion.style.left  = "30%";
    notificacion.style.fontSize  = "20px";

    document.body.appendChild(notificacion);

    setTimeout(()=>{
       notificacion.remove(); 
    },2000)
})


// Eliminar  elementos Ejemplo 7

eliminar.addEventListener('click', ()=>{
    const ultimo = crear.lastElementChild;

    if(ultimo){
        crear.removeChild(ultimo);
    }else{
        alert("No existe elemento")
    }
})

// modificar atributos 8

const imagenes = document.getElementById('imagenes');

document.addEventListener('keydown',(evento)=>{
    if(evento.key === 'd'){
        imagenes.setAttribute('src','zapato 2.png');
    }else if(evento.key === 'f'){
        imagenes.setAttribute('src','zapato 1.png');
    }
})


// ejemplo 9 reemplazar info de una tabla

const contenedor = document.getElementById('ListaPadre');

const api = document.getElementById('innerhtml');

api.addEventListener('click', ()=>{
    contenedor.innerHTML = `
    <h2>Contenido de animales</h2>
<p>Lista de animales</p>

<table border="1px" CELLSPACING = 0>
    <tr>
        <th>Codigo</th>
        <th>Nombre</th>
        <th>Color</th>
    </tr>
    <tr>
        <td>01</td>
        <td>Perro</td>
        <td>Negro</td>
    </tr>
    <tr>
        <td>02</td>
        <td>Gato</td>
        <td>Blanco</td>
    </tr>
    <tr>
        <td>03</td>
        <td>Pez</td>
        <td>Naranja</td>
    </tr>
</table>
    `;
})

