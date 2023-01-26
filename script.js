'use strict';
let displayValue = 0;
let userInputValue = 0;
let totalValue = 0;

const displayTotal = document.querySelector('.total');
const displayInput = document.querySelector('.input');
const btnClear = document.querySelector('.clear');
const btnDelete = document.querySelector('.delete');
const btnAdd = document.querySelector('.add');
const btnSubtract = document.querySelector('.subtract');
const btnMultiply = document.querySelector('.multiply');
const btnDivide = document.querySelector('.divide');
const btnDecimal = document.querySelector('.decimal');
const btnEqual = document.querySelector('.equal');
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
const allBtns = document.querySelectorAll('.btn');

const operate = function () {
  if (btnAdd.classList.contains('active')) {
    if (totalValue === 0) {
      totalValue = userInputValue;
      userInputValue = 0;
    } else {
      totalValue = add(userInputValue, totalValue);
      userInputValue = 0;
      displayTotal.textContent = totalValue;
    }
  } else if (btnSubtract.classList.contains('active')) {
    if (totalValue === 0) {
      totalValue = userInputValue;
      userInputValue = 0;
    } else {
      totalValue = totalValue - userInputValue;
      userInputValue = 0;
      displayTotal.textContent = totalValue;
    }
  } else if (btnMultiply.classList.contains('active')) {
    if (totalValue === 0) {
      totalValue = userInputValue;
      userInputValue = 0;
    } else {
      if (userInputValue === 0) {
        return;
      } else {
        totalValue = totalValue * userInputValue;
        userInputValue = 0;
        displayTotal.textContent = totalValue;
      }
    }
    // removeActiveClasslist();
  } else if (btnDivide.classList.contains('active')) {
    if (totalValue === 0) {
      totalValue = userInputValue;
      userInputValue = 0;
    } else {
      if (userInputValue === 0) {
        return;
      } else {
        totalValue = totalValue / userInputValue;
        userInputValue = 0;
        displayTotal.textContent = totalValue;
      }
    }
  }
};

function removeActiveClasslist() {
  btnAdd.classList.remove('active');
  btnSubtract.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnDivide.classList.remove('active');
  userInputValue = Number(userInputValue);
}
btnAdd.addEventListener('click', function () {
  operate();
  removeActiveClasslist();
  btnAdd.classList.add('active');
  userInputValue = Number(userInputValue);
  if (totalValue === 0) {
    totalValue = userInputValue;
    userInputValue = 0;
  } else {
    totalValue += userInputValue;
    userInputValue = 0;
    displayTotal.textContent = totalValue;
  }
});

btnSubtract.addEventListener('click', function () {
  operate();
  removeActiveClasslist();
  btnSubtract.classList.add('active');
  if (totalValue === 0) {
    totalValue = userInputValue;
    userInputValue = 0;
  } else {
    totalValue -= userInputValue;
    userInputValue = 0;
    displayTotal.textContent = totalValue;
  }
});

btnMultiply.addEventListener('click', function () {
  operate();
  removeActiveClasslist();
  btnMultiply.classList.add('active');
  if (totalValue === 0) {
    totalValue = userInputValue;
    userInputValue = 0;
    //   } else {
    //     if (btnMultiply.classList.contains('active')) {
    //       totalValue *= userInputValue;
    //       userInputValue = 0;
    //       displayInput.textContent = totalValue;
    //     } else {
    //       return;
    //     }
  }
});
btnDivide.addEventListener('click', function () {
  operate();
  removeActiveClasslist();
  btnDivide.classList.add('active');
  if (totalValue === 0) {
    totalValue = userInputValue;
    userInputValue = 0;
    //   } else {
    //     if (btnDivide.classList.contains('active')) {
    //       totalValue /= userInputValue;
    //       userInputValue = 0;
    //       displayInput.textContent = totalValue;
    //     } else {
    //       return;
    //     }
  }
});

btnEqual.addEventListener('click', operate);

// btnEqual.addEventListener('click', function () {
//     if (btnAdd.classList.contains('active')) {
//       totalValue = add(userInputValue, totalValue);
//       userInputValue = 0;
//       displayInput.textContent = totalValue;
//     } else if (btnSubtract.classList.contains('active')) {
//       totalValue = totalValue - userInputValue;
//       userInputValue = 0;
//       displayInput.textContent = totalValue;
//     } else if (btnMultiply.classList.contains('active')) {
//       totalValue = totalValue * userInputValue;
//       userInputValue = 0;
//       displayInput.textContent = totalValue;
//       removeActiveClasslist();
//     } else if (btnDivide.classList.contains('active')) {
//       totalValue = totalValue / userInputValue;
//       userInputValue = 0;
//       displayInput.textContent = totalValue;
//     }
//   });

displayInput.textContent = 0;

const clearAll = function () {
  displayValue = 0;
  userInputValue = 0;
  totalValue = 0;
  displayInput.textContent = 0;
  displayTotal.textContent = 0;
};
btnDelete.addEventListener('click', function () {
  userInputValue = userInputValue.slice(0, -1);
  displayInput.textContent = userInputValue;
});

btnClear.addEventListener('click', clearAll);

const addUserInput = function (e) {
  if (typeof userInputValue === 'undefined' || userInputValue === 0) {
    if (e.target.textContent === '0' || e.target.textContent === '.') {
      return;
    }
    userInputValue = e.target.textContent;
  } else {
    userInputValue += e.target.textContent;
  }
  displayInput.textContent = userInputValue;
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
btnDecimal.addEventListener('click', addUserInput);

//button functions
const add = function (c, d) {
  let a = Number(c);
  let b = Number(d);
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

//works but you have to put in array
// const multiply = function (a, b) {
//   return a * b;
// };
// const multiply = function (...args) {
//     let sum = 0;
//     let numbers = args.map(Number);
//     console.log(numbers);
//     for (let i = 0; i < numbers.length; i++) {
//       if (i === 0) {
//         sum += args[i];
//       } else {
//         sum *= args[i];
//       }
//     }
//     return sum[0];
//   };
//works but have to put in array
const divide = function (a, b) {
  return a / b;
};

// const operate = function (...args) {
//   let operator = [...args];
//   return operator[1];
//   if (operator === '+') {
//     add(value1, value2);
//   } else if (operator === '-') {
//     subtract(value1, value2);
//   } else if (operator === '*') {
//     multiply(value1, value2);
//   } else if (operator === '/') {
//     divide(value1, value2);
//   }
// };

for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener('click', function () {
    console.log(userInputValue, totalValue);
  });
}
