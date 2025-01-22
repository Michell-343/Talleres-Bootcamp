
    const url = "https://fakestoreapi.com/products";

    const listaProductos = document.getElementById("lista-productos");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total");

    let carrito = [];
    let total = 0;

    // Appi~ 
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((productos) => {
            productos.forEach((producto) => {
                const item = document.createElement("div");
                item.classList.add("producto");
            
    //inner HTML        
                item.innerHTML = `
                    <img src="${producto.image}">
                    <div>
                        <h3>${producto.title}</h3>
                        <p>Precio: $${producto.price}</p>
                        <button data-id="${producto.id}" data-precio="${producto.price}" data-titulo="${producto.title}" data-imagen="${producto.image}">Agregar al carrito</button>
                    </div>
                `;
                listaProductos.append(item);
            });
        });

    // evento del click agregar listado al carrito
    listaProductos.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const id = e.target.dataset.id;
            const precio = parseFloat(e.target.dataset.precio);
            const titulo = e.target.dataset.titulo;
            const imagen = e.target.dataset.imagen;

            carrito.push({ id, titulo, precio, imagen });
            total += precio;

            actualizarCarrito();
            alert("Producto agregado al carrito.");
        }
    });

    // Escuchar clics en la lista del carrito para eliminar productos
    listaCarrito.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {  //comprobar que se ejecute al darle click al boton
            const id = e.target.dataset.id;
            const index = carrito.findIndex((producto) => producto.id === id);
            if (index !== -1) {
                total -= carrito[index].precio;
                carrito.splice(index, 1);
            }
            actualizarCarrito();
            alert("Producto eliminado del carrito.");
        }
    });

    // Función actualización del carrito
    function actualizarCarrito() {
        listaCarrito.innerHTML = ""; 
        carrito.forEach((producto) => {
            const itemCarrito = document.createElement("div");
            itemCarrito.classList.add("item-carrito");
            itemCarrito.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.titulo}">
                <div>
                    <h3>${producto.titulo}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <button data-id="${producto.id}">Eliminar</button>
                </div>
            `;
            listaCarrito.append(itemCarrito);
        });
        totalCarrito.textContent = `Total: $${total}`;
    };

