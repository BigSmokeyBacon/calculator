'use strict';
let displayValue = '';
let userInputValue = '';
let totalValue = 0;
let decimalOnOff = true;
console.log(displayValue.textContent === undefined);

const displayTotal = document.querySelector('.total');
const displayInput = document.querySelector('.input');
const userInputText = document.querySelector('.text');
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

for (let i = 0; i < allBtns.length; i++) {
  //   helpMe();
  allBtns[i].addEventListener('click', function () {
    console.log(userInputValue, totalValue);
  });
}
// function helpMe() {
//   if (
//     displayInput.textContent === '0' ||
//     displayInput.textContent === 'lol' ||
//     // displayTotal.textContent === '0' ||
//     displayTotal.textContent === 'lol'
//   ) {
//     console.log(true);
//     userInputValue = 0;
//     totalValue = 0;
//   }
// }

function removeActiveClasslist() {
  btnAdd.classList.remove('active');
  btnSubtract.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnDivide.classList.remove('active');
  userInputValue = Number(userInputValue);
}
btnAdd.addEventListener('click', function () {
  console.log(userInputValue);
  // if (!userInputValue.textContent === undefined) {
  operate();
  removeActiveClasslist();
  decimalOnOff = true;
  btnAdd.classList.add('active');
  userInputValue = Number(userInputValue);
  if (totalValue === 0) {
    totalValue = userInputValue;
    userInputText.textContent = 'a';
    userInputValue = '';
  } else {
    // if (!userInputValue.textContent === undefined) {
    totalValue += userInputValue;
    displayTotal.textContent = totalValue;
    userInputText.textContent = 'a';
    userInputValue = '';
  }
  // }

  displayInput.textContent = 0;
  // }
});

btnSubtract.addEventListener('click', function () {
  operate();
  removeActiveClasslist();
  decimalOnOff = true;
  btnSubtract.classList.add('active');
  userInputValue = Number(userInputValue);
  if (totalValue === 0 && userInputValue > 0) {
    console.log('hello');
    totalValue = userInputValue;
    userInputText.textContent = 'a';
    userInputValue = '';
  } else {
    totalValue -= userInputValue;
    displayTotal.textContent = totalValue;
    userInputText.textContent = 'a';
    userInputValue = '';
  }
  displayInput.textContent = 0;
});

btnMultiply.addEventListener('click', function () {
  operate();
  removeActiveClasslist();
  decimalOnOff = true;
  btnMultiply.classList.add('active');
  userInputValue = Number(userInputValue);

  if (totalValue === 0) {
    totalValue = userInputValue;
    userInputText.textContent = 'a';
    userInputValue = '';
  } else {
    if (btnMultiply.classList.contains('active')) {
      if (userInputValue || userInputText.textContent === '0') {
        totalValue *= userInputValue;
        displayInput.textContent = totalValue;
        userInputText.textContent = 'a';
        userInputValue = '';
        displayTotal.textContent = totalValue;
      }
    } else {
      return;
    }
  }
  displayInput.textContent = 0;
});
btnDivide.addEventListener('click', function () {
  // userInputValue = Number(userInputValue);
  // totalValue = Number(totalValue);
  operate();
  removeActiveClasslist();
  decimalOnOff = true;
  btnDivide.classList.add('active');
  userInputValue = Number(userInputValue);

  if (totalValue === 0) {
    totalValue = userInputValue;
    userInputText.textContent = 'a';
    userInputValue = '';
  } else {
    if (btnDivide.classList.contains('active')) {
      if (userInputValue || userInputText.textContent === '0') {
        totalValue *= userInputValue;
        displayInput.textContent = totalValue;
        userInputText.textContent = 'a';
        userInputValue = '';
        displayTotal.textContent = totalValue;
      }
    } else {
      return;
    }
    //   totalValue /= userInputValue;
    //   displayInput.textContent = totalValue;
    //   userInputText.textContent = 'a';
    //   userInputValue = '';
    // } else {
    //   return;
    // }
  }
  if (displayTotal.textContent === 'lol') {
    displayInput.textContent = 'lol';
  } else {
    displayInput.textContent = 0;
  }
  console.log(userInputValue, totalValue);
});

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

// displayInput.textContent = 0;

const clearAll = function () {
  removeActiveClasslist();
  displayValue = 0;
  userInputValue = '';
  totalValue = 0;
  displayInput.textContent = 0;
  displayTotal.textContent = 0;
  userInputText.textContent = 'a';
  decimalOnOff = true;
};
btnDelete.addEventListener('click', function () {
  userInputValue = userInputValue.slice(0, -1);
  displayInput.textContent = userInputValue;
});

btnClear.addEventListener('click', clearAll);

const addUserInput = function (e) {
  if (e.target.textContent !== '.') {
    // decimalOnOff = true;
  }
  console.log(userInputValue);
  if (
    typeof userInputValue === 'undefined' ||
    userInputText.textContent !== 'a'
  ) {
    // if (e.target.textContent === '0' || e.target.textContent === '.') {
    //   console.log('jello');
    //   return;
    // }
    userInputValue += e.target.textContent;
    // userInputValue = userInputValue.replaceAll('^0+', '');

    userInputText.textContent = `${userInputValue}`;
  } else {
    userInputValue += e.target.textContent;
    // userInputValue = userInputValue.replaceAll('^0+', '');
    userInputText.textContent = `${userInputValue}`;
    // userInputValue.textContent = `${userInputValue}`;
  }
  if (e.target.textContent === '.') {
    displayInput.textContent = `${Number(userInputValue)}.`;
  } else {
    displayInput.textContent = Number(userInputValue);
  }
  console.log(userInputText.textContent);
  console.log(userInputValue, totalValue);
  console.log(e.target.classList);
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
btnDecimal.addEventListener('click', function () {
  if (decimalOnOff) {
    btnDecimal.addEventListener('click', addUserInput);
  } else {
    btnDecimal.removeEventListener('click', addUserInput);
  }
  decimalOnOff = false;
});
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
// str = str.replaceAll("^0+", "");
// str = str.replaceAll("^0+", "");
const operate = function () {
  console.log(userInputText.textContent);
  console.log(userInputText.textContent !== 'a');
  console.log(userInputValue, totalValue);
  if (userInputText.textContent !== 'a') {
    userInputValue = Number(userInputValue);
    totalValue = Number(totalValue);
    if (btnAdd.classList.contains('active')) {
      console.log('ADD');
      if (totalValue === 0) {
        totalValue = userInputValue;
        userInputText.textContent = 'a';
        userInputValue = '';
      } else {
        totalValue = add(userInputValue, totalValue);
        displayTotal.textContent = totalValue;
        userInputText.textContent = 'a';
        userInputValue = '';
      }
    } else if (btnSubtract.classList.contains('active')) {
      console.log('SUBRATC');
      if (totalValue === 0) {
        totalValue = userInputValue;
        userInputText.textContent = 'a';
        userInputValue = '';
      } else {
        totalValue = totalValue - userInputValue;
        displayTotal.textContent = totalValue;
        userInputText.textContent = 'a';
        userInputValue = '';
      }
    } else if (btnMultiply.classList.contains('active')) {
      console.log('MULTIPLY');
      if (totalValue === 0) {
        totalValue = userInputValue;
        userInputText.textContent = 'a';
        userInputValue = '';
      } else {
        console.log('hello');
        if (userInputValue === 0 && userInputText.textContent !== 'a') {
          console.log('hello');
          totalValue = 0;
          userInputText.textContent = 'a';
          userInputValue = '';

          displayInput.textContent = '0';
          displayTotal.textContent = '0';
          return;
        } else {
          console.log('goodbye');
          totalValue = totalValue * userInputValue;
          displayTotal.textContent = totalValue;
          userInputValue = '';

          userInputText.textContent = 'a';
        }
      }
      // removeActiveClasslist();
    } else if (btnDivide.classList.contains('active')) {
      console.log('DIVIFDE');
      if (totalValue === 0) {
        totalValue = userInputValue;
        userInputText.textContent = 'a';

        userInputValue = '';
      } else {
        if (userInputValue === 0 && userInputText.textContent !== 'a') {
          displayInput.textContent = 'lol';
          displayTotal.textContent = 'lol';
          return;
        } else {
          totalValue = totalValue / userInputValue;
          displayTotal.textContent = totalValue;
          userInputText.textContent = 'a';
          userInputValue = '';
        }
      }
    } else {
      totalValue = userInputValue;
      displayTotal.textContent = totalValue;
      userInputValue = '';
    }
    //   helpMe();
  }
  console.log(userInputValue, totalValue);
  console.log(userInputText.textContent);
};

btnEqual.addEventListener('click', operate);
