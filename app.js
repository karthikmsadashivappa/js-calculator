var runningTotal = 0;
var buffer = "0";
var previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    // is not a number;
    handleSymbol(value);
  } else {
    // is a number;
    handleNumber(value);
  }
}

function handleSymbol() {}
function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += buffer + numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function(event) {
      console.log(event);
      buttonClick(event.target.innerText);
    });
}

init();
