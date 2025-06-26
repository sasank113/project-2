
const taskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
     if (taskText !== "") {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span class="task-text">${taskText}</span>
                    <button class="done-button" onclick="markAsDone(this)">Done</button>
                    <button class="delete-button" onclick="deleteTask(this)">Delete</button>
                `;
                taskList.appendChild(listItem);
                taskInput.value = ""; 
       }
 }

function markAsDone(button) {
    const listItem = button.parentNode;
    const taskTextSpan = listItem.querySelector('.task-text');
    taskTextSpan.classList.toggle('completed');
}

function deleteTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}

        
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
         addTask();
   }
});