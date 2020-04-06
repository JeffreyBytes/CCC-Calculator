/*
Updated version of the calculator that uses HTML input and buttons with
  event handling listeners to perform the operations.
*/

// Define global constants
const DIVIDE_BY_ZERO_ERROR = "Yo.... You can't divide by 0.... Dumbass";
const NOT_FINITE_ERROR = "Please input only numbers";
const NO_ERROR = "There is no error.... You shouldn't be seeing this... Something really did go wrong here....";

// Define global variables
let hasError = false;
let result = 0;
let errorType = NO_ERROR;

// Set up event handlers
document.getElementById("btnAdd").addEventListener("click", function() { setup("add"); });
document.getElementById("btnSubtract").addEventListener("click", function() { setup("subtract"); });
document.getElementById("btnMultiply").addEventListener("click", function() { setup("multiply"); });
document.getElementById("btnDivide").addEventListener("click", function() { setup("divide"); });
document.getElementById("btnAns").addEventListener("click", function () { answerButtonPressed() });

// Define math functions
function add(numbers) {

  result = numbers[0] + numbers[1];
  updateAnswer();
}

function subtract(numbers) {

  result = numbers[0] - numbers[1];
  updateAnswer();
}

function multiply(numbers) {

  result = numbers[0] * numbers[1];
  updateAnswer();
}

function divide(numbers) {

  if (numbers[1] != 0) {
    result = numbers[0] / numbers[1];
    updateAnswer(); // Do math if not trying to divide by 0
  } else {
    hasError = true;
    errorType = DIVIDE_BY_ZERO_ERROR;
    updateAnswer();
  }
}

// Define helper functions
function setup(operation) {

  let numbers = getValues();

  // Check if the numbers entered by the user are finite and usable
  if (!isFinite(numbers[0]) || !isFinite(numbers[1])) {
    hasError = true;
    errorType = NOT_FINITE_ERROR;
    updateAnswer();
    return
  }

  // Call the math function the user requested
  switch (operation) {
    case "add":
      add(numbers);
      return;
    case "subtract":
      subtract(numbers);
      return;
    case "multiply":
      multiply(numbers);
      return;
    case "divide":
      divide(numbers);
      return;
  }
}

function getValues() {

  // Get the numbers the user put in the input fields
  let num1 = parseFloat(document.getElementById("number1").value);
  let num2 = parseFloat(document.getElementById("number2").value);
  return [num1, num2]
}

function answerButtonPressed() {

  // Set Number 1 text box to result && clear Number 2 text box
  document.getElementById("number1").value = result;
  document.getElementById("number2").value = "";
}

function updateAnswer() {

  // Display the answer or an error
  if (hasError) {
    document.getElementById("answer").innerHTML = "<b>ERROR</b>: " + errorType;
    hasError = false; // reset hasError to false
  } else {
    document.getElementById("answer").innerHTML = "<b>Answer</b>: " + result;
  }
}
