'use strict';
let displayValue, firstUserInputValue, secondUserInputValue, totalValue;
const displayEl = document.querySelector('.display');
const btnClear = document.querySelector('.clear');
const btnDelete = document.querySelector('.delete');
const btnNine = document.querySelector('.nine');
const btnEight = document.querySelector('.eight');
const btnSeven = document.querySelector('.seven');
const btnSix = document.querySelector('.six');
const btnFive = document.querySelector('.five');
const btnFour = document.querySelector('.four');
const btnThree = document.querySelector('.three');
const btnTwo = document.querySelector('.two');
const btnOne = document.querySelector('.one');
const btnZero = document.querySelector('.zero');

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
  displayEl.textContent = firstUserInputValue;
});

btnClear.addEventListener('click', clearAll);
const addUserInput = function (e) {
  if (typeof firstUserInputValue === 'undefined' || firstUserInputValue === 0) {
    if (e.target.textContent === '0') {
      return;
    }
    firstUserInputValue = e.target.textContent;
  } else {
    firstUserInputValue += e.target.textContent;
  }
  console.log(firstUserInputValue);
  displayEl.textContent = firstUserInputValue;
};
btnNine.addEventListener('click', addUserInput);
btnEight.addEventListener('click', addUserInput);
btnSeven.addEventListener('click', addUserInput);
btnSix.addEventListener('click', addUserInput);
btnFive.addEventListener('click', addUserInput);
btnFour.addEventListener('click', addUserInput);
btnThree.addEventListener('click', addUserInput);
btnTwo.addEventListener('click', addUserInput);
btnOne.addEventListener('click', addUserInput);
btnZero.addEventListener('click', addUserInput);

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
