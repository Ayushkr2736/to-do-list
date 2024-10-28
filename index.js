function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    const taskList = document.getElementById("taskList");

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <button onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}

function toggleComplete(task) {
  task.classList.toggle("completed");
}
