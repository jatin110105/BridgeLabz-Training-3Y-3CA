// Q1: Dynamic Product List Manager (Add, Edit, Delete using event delegation)

const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

// Tracks the <li> currently in edit mode (only one at a time)
let editingItem = null;

// ---------- Add ----------
function addProduct() {
  const name = productInput.value.trim();
  if (name === "") return; // ignore empty input

  const li = document.createElement("li");
  li.innerHTML =
    '<span class="product-name"></span>' +
    '<button class="edit-btn">Edit</button>' +
    '<button class="delete-btn">Delete</button>';
  li.querySelector(".product-name").textContent = name; // textContent avoids HTML injection
  productList.appendChild(li);

  productInput.value = "";
  productInput.focus();
}

addBtn.addEventListener("click", addProduct);
productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addProduct();
});

// ---------- Edit helpers ----------
function startEdit(li) {
  // If another item is being edited, save it first
  if (editingItem && editingItem !== li) saveEdit(editingItem);

  const nameSpan = li.querySelector(".product-name");
  const input = document.createElement("input");
  input.type = "text";
  input.className = "edit-input";
  input.value = nameSpan.textContent;
  input.dataset.original = nameSpan.textContent; // fallback if user leaves it empty

  nameSpan.replaceWith(input);
  li.querySelector(".edit-btn").textContent = "Save";
  li.classList.add("editing");
  editingItem = li;
  input.focus();
}

function saveEdit(li) {
  const input = li.querySelector(".edit-input");
  if (!input) return;

  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = input.value.trim() || input.dataset.original;

  input.replaceWith(nameSpan);
  li.querySelector(".edit-btn").textContent = "Edit";
  li.classList.remove("editing");
  if (editingItem === li) editingItem = null;
}

// ---------- Event delegation: ONE listener on the parent <ul> ----------
productList.addEventListener("click", (event) => {
  const clickedButton = event.target.closest("button");
  if (!clickedButton) return;
  const li = clickedButton.closest("li");

  if (clickedButton.classList.contains("delete-btn")) {
    if (editingItem === li) editingItem = null;
    li.remove();
  } else if (clickedButton.classList.contains("edit-btn")) {
    // The same button toggles between Edit and Save
    if (li.classList.contains("editing")) saveEdit(li);
    else startEdit(li);
  }
});

// Pressing Enter inside the edit box saves it (also delegated)
productList.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.classList.contains("edit-input")) {
    saveEdit(event.target.closest("li"));
  }
});

// Click anywhere outside the edited item -> auto-save
document.addEventListener("click", (event) => {
  if (editingItem && !editingItem.contains(event.target)) {
    saveEdit(editingItem);
  }
});
