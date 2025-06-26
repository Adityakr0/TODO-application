const addBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button class="delete-btn">X</button>
  `;

  todoList.appendChild(li);

  input.value = "";

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });
});
