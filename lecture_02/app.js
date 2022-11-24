

const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const tasksList = document.getElementById('tasksList');

var counter = 0;

addTaskButton.addEventListener('click', () => {

    if (taskInput.value === '') {
        return;
    }
    counter++;
    const newTask = `
            <div class="card my-3">
                <div class="card-header">
                    Task Number : ${counter}
                </div>
                <div class="card-body">
                    <p>${taskInput.value}</p>
                </div>
            </div>
        `

    taskInput.value = "";
    tasksList.innerHTML += newTask;


})