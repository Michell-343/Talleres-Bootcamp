function obtener(event){
    event.preventDefault();

let url = 'https://jsonplaceholder.typicode.com/users' //agregar la dirección a una variable, llamada url



fetch(url) //realiza la conexion a la url
.then (res => res.json()) // obtener los resultados que sean de tipo json.
.then (data => { // obtener los datos  
    
    const odatos= document.getElementById('datos') //llamar por id el elemento tabla del html


    data.forEach(e => { //recorrer los datos

       // console.log(e.id, e.id,e.title, e.body) //visualizamos los datos uno a uno en consola
            
        
        const obtener = document.createElement('tr') //crear un elemento html que es el tr fila
        obtener.innerHTML= `<td> ${e.id} </td>             
                            <td> ${e.name} </td>
                            <td> ${e.username} </td>
                            <td> ${e.email} </td>`
         odatos.appendChild(obtener)  //agrega los datos a la tabla de la manera como lo organizamos
    });
})

.catch(Error => {
    console.error("Error al obtener los datos") // manejar error en caso de que halla un problema/bug
})

}