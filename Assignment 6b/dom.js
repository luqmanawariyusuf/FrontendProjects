// Wait until the DOM is fully loaded before running any code
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("mainHeading");
  const changeTextBtn = document.getElementById("changeTextBtn");
  const changeColorBtn = document.getElementById("changeColorBtn");
  const box = document.getElementById("colorBox");
  const addItemBtn = document.getElementById("addItemBtn");
  const removeItemBtn = document.getElementById("removeItemBtn");
  const todoList = document.getElementById("todoList");
  const newItemInput = document.getElementById("newItem");

  // ✅ Change heading text (now works perfectly)
  let toggle = false;
  changeTextBtn.addEventListener("click", () => {
    if (!toggle) {
      heading.textContent = "You just changed the DOM!";
    } else {
      heading.textContent = "Welcome to DOM Practice";
    }
    toggle = !toggle;
  });

  // ✅ Change the color of the box randomly
  changeColorBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    box.style.backgroundColor = randomColor;
  });

  // ✅ Add new item to the list
  addItemBtn.addEventListener("click", () => {
    const newItemText = newItemInput.value.trim();
    if (newItemText !== "") {
      const li = document.createElement("li");
      li.textContent = newItemText;
      todoList.appendChild(li);
      newItemInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  });

  // ✅ Remove the last item from the list
  removeItemBtn.addEventListener("click", () => {
    if (todoList.lastElementChild) {
      todoList.removeChild(todoList.lastElementChild);
    } else {
      alert("No items to remove!");
    }
  });
});
