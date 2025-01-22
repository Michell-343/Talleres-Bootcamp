function mostrarProductosEnPagina() {
    const url = 'https://fakestoreapi.com/products';

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((productos) => {

        // seccion de productos
            const contenedorProductos = document.createElement('div');
            contenedorProductos.id = 'lista-productos';

         //insertar los productos con la propiedad de innerHTML
            contenedorProductos.innerHTML = '<h2>Productos disponibles</h2>';
            document.body.appendChild(contenedorProductos);

         // eccion para el carrito
            const contenedorCarrito = document.createElement('div');
            contenedorCarrito.id = 'carrito';
      
         //insertar los productos con la propiedad de innerHTML         
            contenedorCarrito.innerHTML = '<h2>Carrito</h2><ul id="lista-carrito"></ul>';
            document.body.appendChild(contenedorCarrito);

    // Crear elementos de la lista de productos
            productos.forEach((producto) => {
                const itemProducto = document.createElement('div');
                itemProducto.className = 'producto-item';
                itemProducto.innerHTML = `
                    <h3>${producto.title}</h3>
                    <img src="${producto.image}" style="width:100px;">
                    <p>Precio: $${producto.price}</p>
                `;

                // Boton añadir al carrito
                const botonAgregar = document.createElement('button');
                botonAgregar.textContent = 'Añadir al carrito';
                botonAgregar.addEventListener('click', () => {
                    agregarAlCarrito(producto);
                });

                itemProducto.appendChild(botonAgregar);
                contenedorProductos.appendChild(itemProducto);
            });
        });
}

function agregarAlCarrito(producto) {
    const listaCarrito = document.getElementById('lista-carrito');


    // Crear producto
    const itemCarrito = document.createElement('li');
    itemCarrito.id = `producto-carrito-${producto.id}`;
    itemCarrito.innerHTML = `
        ${producto.title} - $${producto.price}
    `;

    // Botón  eliminar del carrito
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar producto';
    botonEliminar.addEventListener('click', () => {
        eliminarDelCarrito(producto.id);
    });

    itemCarrito.appendChild(botonEliminar);
    listaCarrito.appendChild(itemCarrito);
}

function eliminarDelCarrito(productoId) {
    const itemCarrito = document.getElementById(`producto-carrito-${productoId}`);
    if (itemCarrito) {
        itemCarrito.remove();
    } else {
        alert('El producto no está en el carrito.');
    }
}

// Llamar a la función
mostrarProductosEnPagina();
