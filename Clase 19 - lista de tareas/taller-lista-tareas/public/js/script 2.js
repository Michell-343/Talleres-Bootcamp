const url = 'http://localhost:2000/Tareas'; 

// Función para obtener todos los items desde el backend

function getItems() {
    fetch(url)
    .then(response => response.json())
}

const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const empty = document.getElementById('empty');

addButton.addEventListener('click', addTask);
function addTask(){
    const task = taskInput.value.trim();

    if(task){
        createTaskElement(task);
        empty.style.display = "none";
        taskInput.value = '';

    } else {
        alert('Debes ingresar una tarea');

    }
}

function createTaskElement(task) {

    const listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.appendChild(listItem);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'boton-container';

    // boyon eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.className = 'deleteButton';

    // boton actualizar
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Modificar';
    updateButton.className = 'actualizarButton';
    updateButton.style.backgroundColor = '#e9981e';

    //colocar los botones
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(updateButton);
    listItem.appendChild(buttonContainer);

    //  eliminar tarea
    deleteButton.addEventListener('click', () => {
        listItem.remove();

        const items = document.querySelectorAll('li');
        if (items.length === 0) {
            empty.style.display = "block";
        }
    });

    // modificar tarea
    updateButton.addEventListener('click', () => {
        const newTask = prompt('Modificar tarea:', task);
        if (newTask) {
            listItem.firstChild.textContent = newTask;
        }
    });
}
