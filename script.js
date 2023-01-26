'use strict';
let displayValue, firstUserInputValue, secondUserInputValue, totalValue;
const displayEl = document.querySelector('.display');
const btnClear = document.querySelector('.clear');
const btnDelete = document.querySelector('.delete');
const btnNine = document.querySelector('.nine');

displayValue = 10000;
displayEl.textContent = displayValue;

const clearAll = function () {
  displayValue = 0;
  firstUserInputValue = 0;
  secondUserInputValue = 0;
  totalValue = 0;
  displayEl.textContent = displayValue;
};
btnDelete.addEventListener('click', function () {
  firstUserInputValue = firstUserInputValue.slice(0, -1);
  console.log(firstUserInputValue);
});

btnClear.addEventListener('click', clearAll);
btnNine.addEventListener('click', function (e) {
  if (typeof firstUserInputValue === 'undefined' || firstUserInputValue === 0) {
    firstUserInputValue = e.target.textContent;
  } else {
    firstUserInputValue += e.target.textContent;
  }
  console.log(firstUserInputValue);
});

const addUserInput = function () {};

//button functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

//works but you have to put in array
const multiply = function (args) {
  let sum = 0;
  let numbers = args.map(Number);
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      sum += args[i];
    } else {
      sum *= args[i];
    }
  }
  return sum;
};
//works but have to put in array
const divide = function (args) {
  let sum = 0;
  let numbers = args.map(Number);
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      sum += args[i];
    } else {
      sum /= args[i];
    }
  }
  return sum;
};

const operate = function (...args) {
  let operator = [...args];
  return operator[1];
  if (operator === '+') {
    add(value1, value2);
  } else if (operator === '-') {
    subtract(value1, value2);
  } else if (operator === '*') {
    multiply(value1, value2);
  } else if (operator === '/') {
    divide(value1, value2);
  }
};

console.log(operate(1, 'plus', 2));
