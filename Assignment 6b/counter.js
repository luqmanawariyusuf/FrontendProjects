let count = 0;

// Get HTML elements
const counterDisplay = document.getElementById("counterDisplay");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const resetBtn = document.getElementById("resetBtn");

// Add button → increase count
addBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Subtract button → decrease count
subtractBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

// Reset button → reset to 0
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// Function to update display
function updateDisplay() {
  counterDisplay.textContent = count;
}
