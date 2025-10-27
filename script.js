const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");


addBtn.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    alert(" matn kiriting");
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;

  const editBtn = document.createElement("button");
  editBtn.textContent = " tahrirlash";
  editBtn.classList.add("edit");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = " ochirish";
  deleteBtn.classList.add("delete");

 
  editBtn.addEventListener("click", () => {
    const newText = prompt("yangi matn kiriting:", li.firstChild.textContent);
    if (newText) li.firstChild.textContent = newText;
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = ""; 
});
