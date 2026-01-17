const socket = io();

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const title = taskInput.value.trim();
  if (title) {
    socket.emit("task:add", title);
    taskInput.value = "";
  }
});

socket.on("task:list", (tasks) => {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.title;

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    li.addEventListener("click", () => {
      socket.emit("task:toggle", task.id);
    });

    taskList.appendChild(li);
  });
});
