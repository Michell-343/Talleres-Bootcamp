const url = 'http://localhost:2000/Tareas';

console.log('Hola mundo');

// Función para obtener todos los items desde el backend
function getItems() {
  fetch(url)
    .then((response) => response.json())
    .then((items) => {
      const itemsList = document.getElementById('items-list'); // Asegúrate de que este ID exista en tu HTML
      itemsList.innerHTML = '';

      items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.tarea;

        const editarBoton = document.createElement('button');
        editarBoton.textContent = 'Editar';
        editarBoton.style.backgroundColor = '#6db9b8';
        editarBoton.addEventListener('click', () => {
          document.getElementById('taskInput').value = item.tarea;
          document.getElementById('taskForm').dataset.id = item._id; // Guardamos el ID del item a editar
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.style.backgroundColor = '#f76c6c';
        deleteButton.addEventListener('click', () => deleteItem(item._id));

        li.appendChild(editarBoton);
        li.appendChild(deleteButton);
        itemsList.appendChild(li);
      });
    })
    .catch((error) => console.error('Error al obtener los items:', error));
}

// Función para agregar o actualizar un item
document.getElementById('taskForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const tarea = document.getElementById('taskInput').value;
  const itemId = e.target.dataset.id; // ID del item que se está editando (si aplica)

  if (itemId) {
    // Actualizar un item existente
    fetch(`${url}/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tarea }),
    })
      .then(() => {
        alert('Tarea actualizada con éxito');
        resetForm();
        getItems();
      })
      .catch((error) => console.error('Error al actualizar la tarea:', error));
  } else {
    // Crear un nuevo item
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tarea }),
    })
      .then(() => {
        alert('Tarea creada con éxito');
        resetForm();
        getItems();
      })
      .catch((error) => console.error('Error al crear la tarea:', error));
  }
});

// Función para eliminar un item
function deleteItem(id) {
  if (confirm('¿Estás seguro de que quieres eliminar este item?')) {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        alert('Tarea eliminada con éxito');
        getItems();
      })
      .catch((error) => console.error('Error al eliminar la tarea:', error));
  }
}

// Función para limpiar el formulario
function resetForm() {
  const taskForm = document.getElementById('taskForm');
  taskForm.reset();
  delete taskForm.dataset.id; // Limpiar el ID guardado
}

// Event listeners adicionales
document.getElementById('obtener_items').addEventListener('click', (e) => {
  e.preventDefault();
  getItems();
});

document.getElementById('limpiar_items').addEventListener('click', (e) => {
  e.preventDefault();
  const itemsList = document.getElementById('items-list');
  itemsList.innerHTML = '';
  resetForm();
});
