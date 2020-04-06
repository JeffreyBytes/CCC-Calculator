/*
This is a basic calculator application that will prompt the user for two
  numbers and an operation type and then show the user the answer with alert()
*/

// Define functions
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber
}

// Let the user know how webpage works.
alert("Enter 2 numbers and choose an operation.");

// Prompt the user for two numbers.
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

// Prompt the user for the operation
let operation = prompt("Do you want to:\n\
  1. Add\n\
  2. Subtract\n\
  3. Multiply\n\
  4. Divide");


// Do the operation and alert the user of the result
operation = parseInt(operation)
let result;

switch (operation) {
  case 1:
    result = add(num1, num2);
    break;
  case 2:
    result = subtract(num1, num2);
    break;
  case 3:
    result = multiply(num1, num2);
    break;
  case 4:
    if (num2 != 0) {
      result = divide(num1, num2);
    }
    break;
  default:
    alert("I didn't understand that... Make sure you picked an operation!")
    break;
}

// Show the result if not NaN or Infinite
if (isFinite(result)) {
  alert("Result: " + result)
} else {
  alert("Make sure you are typing only numbers!")
}
