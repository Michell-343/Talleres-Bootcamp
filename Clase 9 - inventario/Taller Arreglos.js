        // Inventario inicial
        const inventario = [
            { nombre: 'Televisor 4K', codigo: 'TV001', cantidad: 10, precio: 300 },
            { nombre: 'Auriculares Bluetooth', codigo: 'AU002', cantidad: 2, precio: 50 },
            { nombre: 'Smartphone', codigo: 'SP003', cantidad: 0, precio: 500 },
            { nombre: 'Laptop', codigo: 'LP004', cantidad: 15, precio: 800 },
        ];

        // Función para mostrar el inventario
        function mostrarInventario() {
            let output = '';
            inventario.forEach(producto => {
                output += `${producto.nombre} (Código: ${producto.codigo}, Cantidad: ${producto.cantidad})`;
                if (producto.cantidad > 0) {
                    output += ` - Valor total: $${producto.cantidad * producto.precio}\n`;
                } else {
                    output += '\n';
                }
            });
            document.getElementById('output').innerText = output;
        }

        // Función para verificar el stock
        function verificarStock() {
            let output = '';
            inventario.forEach(producto => {
                if (producto.cantidad === 0) {
                    output += `${producto.nombre}: Producto agotado\n`;
                } else if (producto.cantidad <= 5) {
                    output += `${producto.nombre}: Próximo a agotarse\n`;
                } else {
                    output += `${producto.nombre}: En stock\n`;
                }
            });
            document.getElementById('output').innerText = output;
        }

        // Menu
        function modificarInventario() {
            const opcion = prompt(`Seleccione una opción:\n1. Actualizar Stock\n2. Agregar Producto\n3. Eliminar Producto\n4. Buscar Producto\n5. Reemplazar Producto\n6. Salir`);

            switch(opcion) {
                case '1':
                    const codigoActualizar = prompt('Ingrese el código del producto a actualizar:');
                    const nuevaCantidad = parseInt(prompt('Ingrese la nueva cantidad:'));
                    actualizarStock(codigoActualizar, nuevaCantidad);
                    break;
                case '2':
                    const nombreNuevo = prompt('Ingrese el nombre del nuevo producto:');
                    const codigoNuevo = prompt('Ingrese el código del nuevo producto:');
                    const cantidadNueva = parseInt(prompt('Ingrese la cantidad del nuevo producto:'));
                    const precioNuevo = parseFloat(prompt('Ingrese el precio del nuevo producto:'));
                    agregarProducto(nombreNuevo, codigoNuevo, cantidadNueva, precioNuevo);
                    break;
                case '3':
                    const codigoEliminar = prompt('Ingrese el código del producto a eliminar:');
                    eliminarProducto(codigoEliminar);
                    break;
                case '4':
                    const nombreBuscar = prompt('Ingrese el nombre del producto a buscar:');
                    buscarProducto(nombreBuscar);
                    break;
                case '5':
                    const codigoReemplazar = prompt('Ingrese el código del producto a reemplazar:');
                    reemplazarProducto(codigoReemplazar);
                    break;
                case '6':
                    alert ("Gracias por usar nuestro programa");       
                    break;                                    
                default:
                    alert('Opción no válida.');
            }
        }

        // Función para actualizar el stock
        function actualizarStock(codigo, nuevaCantidad) {
            const producto = inventario.find(p => p.codigo === codigo);
            if (producto) {
                producto.cantidad = nuevaCantidad;
                alert(`Stock actualizado: ${producto.nombre} ahora tiene ${producto.cantidad} unidades.`);
            } else {
                alert('Producto no encontrado.');
            }
        }

        // Función para agregar un nuevo producto
        function agregarProducto(nombre, codigo, cantidad, precio) {
            const nuevoProducto = { nombre, codigo, cantidad, precio };
            inventario.push(nuevoProducto);
            alert(`Producto agregado: ${nombre}.`);
        }

        // Función para eliminar un producto
        function eliminarProducto(codigo) {
            const index = inventario.findIndex(p => p.codigo === codigo);
            if (index !== -1) {
                inventario.splice(index, 1);
                alert(`Producto con código ${codigo} eliminado.`);
            } else {
                alert('Producto no encontrado.');
            }
        }

        // Función para buscar un producto por nombre
        function buscarProducto(nombre) {
            const producto = inventario.find(p => p.nombre === nombre);
            if (producto) {
                alert(`Producto encontrado: ${producto.nombre} (Código: ${producto.codigo}, Cantidad: ${producto.cantidad}).`);
            } else {
                alert('Producto no encontrado.');
            }
        }

        // Función para reemplazar un producto
        function reemplazarProducto(codigo) {
            const index = inventario.findIndex(p => p.codigo === codigo);
            if (index !== -1) {
                const nuevoNombre = prompt('Ingrese el nombre del nuevo producto:');
                const nuevoCodigo = prompt('Ingrese el código del nuevo producto:');
                const nuevaCantidad = parseInt(prompt('Ingrese la cantidad del nuevo producto:'));
                const nuevoPrecio = parseFloat(prompt('Ingrese el precio del nuevo producto:'));
                inventario[index] = { nombre: nuevoNombre, codigo: nuevoCodigo, cantidad: nuevaCantidad, precio: nuevoPrecio };
                alert(`Producto reemplazado por ${nuevoNombre}.`);
            } else {
                alert('Producto no encontrado.');
            }
        }