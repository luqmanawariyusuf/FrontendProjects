// Function for Rectangle
function calcRectangle() {
  let length = parseFloat(document.getElementById('rectLength').value);
  let width = parseFloat(document.getElementById('rectWidth').value);

  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    document.getElementById('rectResult').innerHTML = "⚠️ Please enter valid positive numbers.";
    return;
  }

  let area = length * width;
  let perimeter = 2 * (length + width);

  document.getElementById('rectResult').innerHTML =
    `Area: ${area.toFixed(2)}<br>Perimeter: ${perimeter.toFixed(2)}`;
}

// Function for Triangle (Heron's Formula)
function calcTriangle() {
  let a = parseFloat(document.getElementById('sideA').value);
  let b = parseFloat(document.getElementById('sideB').value);
  let c = parseFloat(document.getElementById('sideC').value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    document.getElementById('triResult').innerHTML = "⚠️ Please enter valid positive numbers.";
    return;
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    document.getElementById('triResult').innerHTML = "⚠️ Invalid triangle sides.";
    return;
  }

  let perimeter = a + b + c;
  let s = perimeter / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  document.getElementById('triResult').innerHTML =
    `Area: ${area.toFixed(2)}<br>Perimeter: ${perimeter.toFixed(2)}`;
}
