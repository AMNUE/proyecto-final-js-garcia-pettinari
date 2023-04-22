// variables

const addTask = document.getElementById('aniadir-tarea');
const taskContainer = document.getElementById('contenedor-tarea');
const inputTask = document.getElementById('input-tarea');

//Event listener para el boton de añadir

addTask.addEventListener('click', function(){

    let task = document.createElement('div');
    task.classList.add('task')

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);
    
    
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add(checkTask);
    task.appendChild(checkButton);


    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add(deleteTask);
    task.appendChild(deleteButton);

    if(inputTask.value === "") {
        alert("Porfaver, introduzca una tarea");
    } else {
        taskContainer.appendChild(task);
    }





})



