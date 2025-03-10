// ==== Todo CRUD Management ====

// Array to store tasks
let tasks = [];

//DOM Elements
const taskForm = document.getElementById('task-form');
const taskNameInput = document.getElementById('task-name-input');
const taskDescriptionInput = document.getElementById('task-description-input');
const taskList = document.getElementById('task-list');

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span><strong>Name:</strong> ${task.name}</span>
            <span><strong>Description:</strong> ${task.description}</span>
            <button class="edit" onclick="editTask(${index})">Edit</button>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);  
    });
}

// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent form submission
    const newTaskName = taskNameInput.value.trim();
    const newTaskDescription = taskDescriptionInput.value.trim();
    if (newTaskName && newTaskDescription) {
        const newTask = {
            id: tasks.length + 1,
            name: newTaskName,
            description: newTaskDescription
        };
        tasks.push(newTask);
        taskNameInput.value = ''; // Clear the input
        taskDescriptionInput.value = ''; // Clear the input
        renderTasks();
    }
}

// Function to edit a task
function editTask(index) {
    const updatedTaskName = prompt('Edit task name:', tasks[index].name);
    const updatedTaskDescription = prompt('Edit task description:', tasks[index].description);
    if (updatedTaskName !== null && updatedTaskDescription !== null) {
        tasks[index].name = updatedTaskName.trim();
        tasks[index].description = updatedTaskDescription.trim();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Event Listeners
taskForm.addEventListener('submit', addTask);

// Initial Render
renderTasks();