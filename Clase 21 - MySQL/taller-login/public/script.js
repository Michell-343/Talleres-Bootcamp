// Obtener referencias a los elementos del DOM
const userForm = document.getElementById('userForm'); // Selecciona el formulario para crear usuarios.
const listarUsuarios = document.getElementById('listarUsuarios'); // Selecciona el botón para listar usuarios.
const userTable = document.getElementById('userTable').querySelector('tbody'); // Selecciona el cuerpo de la tabla (dentro del elemento <tbody>) donde se mostrarán los usuarios.
const tableContainer = document.getElementById('tableContainer'); // Selecciona el contenedor de la tabla que puede mostrarse u ocultarse.

// **Crear Usuario**
userForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Previene el comportamiento predeterminado del formulario (que recargaría la página).

  const nombre = document.getElementById('nombre').value; // Obtiene el valor del campo "nombre" del formulario.
  const email = document.getElementById('email').value; // Obtiene el valor del campo "email" del formulario.
  const password = document.getElementById('password').value; 
  // Realiza una solicitud HTTP POST al servidor para crear un usuario.
  const response = await fetch('/api/users/create', {
    method: 'POST', // Especifica que se está usando el método POST.
    headers: {
      'Content-Type': 'application/json', // Indica que los datos enviados están en formato JSON.
    },
    body: JSON.stringify({ nombre, email, password}), // Convierte los datos del formulario en un objeto JSON y los envía en el cuerpo de la solicitud.
  });

  if (response.ok) {
    alert('Usuario creado con éxito'); // Muestra un mensaje si la solicitud fue exitosa.
    userForm.reset(); // Limpia los campos del formulario después de enviar los datos.
  } else {
    alert('Error al crear el usuario'); // Muestra un mensaje de error si la solicitud falla.
  }
});

// **Listar Usuarios**
listarUsuarios.addEventListener('click', async () => {
  tableContainer.style.display = 'block'; // Muestra el contenedor de la tabla cuando se hace clic en el botón "Listar Usuarios".

  const response = await fetch('/api/users/list'); // Realiza una solicitud HTTP GET al servidor para obtener la lista de usuarios.
  const users = await response.json(); // Convierte la respuesta del servidor (en formato JSON) en un objeto de JavaScript.

  userTable.innerHTML = ''; // Limpia cualquier contenido previo en la tabla.

  // Recorre la lista de usuarios y crea una fila (<tr>) para cada usuario.
  users.forEach((user) => {
    const row = document.createElement('tr'); // Crea un elemento <tr> para representar una fila en la tabla.
    row.innerHTML = `
      <td>${user.id}</td> <!-- Muestra el ID del usuario. -->
      <td>${user.nombre}</td> <!-- Muestra el nombre del usuario. -->
      <td>${user.email}</td> <!-- Muestra el email del usuario. -->
      <td>${user.password}</td> <!-- Muestra el email del usuario. -->
      <td>
        <button class="edit" onclick="editUser(${user.id})">Editar</button> <!-- Botón para editar al usuario. -->
        <button onclick="deleteUser(${user.id})">Eliminar</button> <!-- Botón para eliminar al usuario. -->
      </td>
    `;
    userTable.appendChild(row); // Agrega la fila creada a la tabla.
  });
});

// **Editar Usuario**
window.editUser = async (id) => {
  const nombre = prompt('Nuevo nombre:'); // Solicita al usuario que ingrese un nuevo nombre.
  const email = prompt('Nuevo email:'); // Solicita al usuario que ingrese un nuevo email.
  const password = prompt('Nueva password:'); 

  // Realiza una solicitud HTTP PUT al servidor para actualizar al usuario con el ID especificado.
  const response = await fetch(`/api/users/edit/${id}`, {
    method: 'PUT', // Especifica que se está usando el método PUT.
    headers: {
      'Content-Type': 'application/json', // Indica que los datos enviados están en formato JSON.
    },
    body: JSON.stringify({ nombre, email, password }), // Envía los datos actualizados en formato JSON.
  });

  if (response.ok) {
    alert('Usuario actualizado con éxito'); // Muestra un mensaje si la solicitud fue exitosa.
    listarUsuarios.click(); // Vuelve a listar los usuarios para reflejar los cambios.
  } else {
    alert('Error al actualizar el usuario'); // Muestra un mensaje de error si la solicitud falla.
  }
};




// **Eliminar Usuario**
window.deleteUser = async (id) => {
  // Realiza una solicitud HTTP DELETE al servidor para eliminar al usuario con el ID especificado.
  const response = await fetch(`/api/users/delete/${id}`, { method: 'DELETE' });

  if (response.ok) {
    alert('Usuario eliminado con éxito'); // Muestra un mensaje si la solicitud fue exitosa.
    listarUsuarios.click(); // Vuelve a listar los usuarios para reflejar los cambios.
  } else {
    alert('Error al eliminar el usuario'); // Muestra un mensaje de error si la solicitud falla.
  }
};
