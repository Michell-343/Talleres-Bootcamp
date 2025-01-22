fetch('datos.json')
.then(response => response.json())
.then(data => {
    console.log(typeof (data));
    const datos = JSON.stringify(data)
    console.log(datos)
    console.log(typeof (datos))
    const datos1 = JSON.parse(datos)
    console.log(datos)
    console.log(typeof (datos1))
    console.log(datos1.nombre)

})
.catch(error => console.log('Error: ',error));


function obtener(event) {
    event.preventDefault(); // Prevenir la acción predeterminada del enlace

    fetch('datos.json')
        .then(response => response.json()) // Convertimos la respuesta a JSON
        .then(elementos => {
            const data = document.getElementById('datos'); // Seleccionamos la tabla

            elementos.forEach(element => {
                const tabla = document.createElement('tr'); // Creamos una fila para cada elemento
                
                const direccion = element.direccio[0]; // Accedemos al primer objeto del array direccio
                
                // Generamos el contenido de la fila
                tabla.innerHTML = ` 
                    <td>${element.nombre}</td>
                    <td>${element.apellido}</td>
                    <td>${element.edad}</td>
                    <td>${direccion.ciudad}</td>
                `;
                data.appendChild(tabla); // Añadimos la fila a la tabla
            });
        })
        .catch(error => console.log('Error: ', error)); // Mostramos cualquier error en consola
}
