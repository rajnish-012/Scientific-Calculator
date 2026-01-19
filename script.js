let display = document.getElementById("display");
let isDegree = true;

// Append values
function appendValue(value) {
  display.value += value;
}

// Append functions
function appendFunc(func) {
  display.value += func;
}

// Clear
function clearDisplay() {
  display.value = "";
}

// Delete
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Degree ↔ Radian
function toggleDegRad() {
  isDegree = !isDegree;
  alert(isDegree ? "Degree Mode" : "Radian Mode");
}

// Convert expression
function formatExpression(exp) {
  return exp
    .replace(/π/g, "Math.PI")
    .replace(/e/g, "Math.E")
    .replace(/√/g, "Math.sqrt")
    .replace(/log/g, "Math.log10")
    .replace(/ln/g, "Math.log")
    .replace(/\^/g, "**")
    .replace(/sin\(/g, isDegree ? "Math.sin(Math.PI/180*" : "Math.sin(")
    .replace(/cos\(/g, isDegree ? "Math.cos(Math.PI/180*" : "Math.cos(")
    .replace(/tan\(/g, isDegree ? "Math.tan(Math.PI/180*" : "Math.tan(");
}

// Calculate
function calculateResult() {
  try {
    let exp = formatExpression(display.value);
    let result = eval(exp);

    if (!isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/().".includes(e.key)) {
    appendValue(e.key);
  }
  if (e.key === "Enter") calculateResult();
  if (e.key === "Backspace") deleteLast();
});
