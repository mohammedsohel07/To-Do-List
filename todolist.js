const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const emptyMsg = document.getElementById("emptyMsg");

function checkEmpty() {
  if (list.children.length === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
  }
}

checkEmpty();

addBtn.addEventListener("click", function () {
  const input = document.getElementById("item").value.trim();

  if (input === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";

  delBtn.addEventListener("click", function () {
    li.remove();
    checkEmpty();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  document.getElementById("item").value = "";

  checkEmpty();
});
