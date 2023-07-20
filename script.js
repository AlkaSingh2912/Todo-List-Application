// Get the input field and unordered list element
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

// Function to delete a task
function deleteTask(button) {
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}
