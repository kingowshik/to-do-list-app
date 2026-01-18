const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.className = "task-item";

  // Task text
  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.textContent = taskText;

  // Action buttons container
  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  // Tick button (complete)
  const tickBtn = document.createElement("button");
  tickBtn.className = "tick-btn";
  tickBtn.textContent = "✓";

  tickBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "✕";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append actions
  actionsDiv.appendChild(tickBtn);
  actionsDiv.appendChild(deleteBtn);

  // Add everything to li
  li.appendChild(textSpan);
  li.appendChild(actionsDiv);

  // Add task to bottom
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
  taskInput.focus();
}

// Add button click
addBtn.addEventListener("click", addTask);

// Add task using Enter key
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Clear all tasks
clearBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});
