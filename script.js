'use strict';
let userInputValue = '';
let totalValue = 0;
let decimalOnOff = true;

const displayTotal = document.querySelector('.total');
const displayInput = document.querySelector('.input');
const displayPreviousEvent = document.querySelector('.event');
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

function removeActiveClasslist() {
  btnAdd.classList.remove('active');
  btnSubtract.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnDivide.classList.remove('active');
  userInputValue = Number(userInputValue);
}
function initUserInput() {
  totalValue = userInputValue;
  userInputText.textContent = 'a';
  userInputValue = '';
}
function resetUserInput() {
  displayTotal.textContent = totalValue;
  userInputText.textContent = 'a';
  userInputValue = '';
}
const decimalSwitch = function () {
  if (decimalOnOff) {
    btnDecimal.addEventListener('click', addUserInput);
    decimalOnOff = false;
  } else {
    btnDecimal.removeEventListener('click', addUserInput);
  }
  console.log(userInputValue);
};

function hello() {
  if (totalValue === 0) {
    return `${userInputValue}`;
  } else {
    return `${totalValue}`;
  }
}

function populateEventDisplay() {
  console.log(userInputValue);
  if (btnAdd.classList.contains('active')) {
    console.log(`${hello()}`);
    console.log(totalValue);
    return (displayPreviousEvent.textContent = `${hello()}+`);
    // if (totalValue === 0) {
    //   displayPreviousEvent.textContent = `${userInputValue}+`;
    // } else {
    //   displayPreviousEvent.textContent = `${totalValue}+`;
    // }
  } else if (btnSubtract.classList.contains('active')) {
    console.log('nearly');
    if (totalValue === 0) {
      displayPreviousEvent.textContent = `${userInputValue}-`;
    } else {
      displayPreviousEvent.textContent = `${totalValue}-`;
    }
    displayInput.textContent = totalValue;
  }
}

btnAdd.addEventListener('click', function () {
  operate();
  removeActiveClasslist();
  btnAdd.classList.add('active');
  // populateEventDisplay();
  userInputValue = Number(userInputValue);
  if (totalValue === 0) {
    initUserInput();
  } else {
    totalValue += userInputValue;
    resetUserInput();
  }

  displayInput.textContent = totalValue;
  populateEventDisplay();
});

btnSubtract.addEventListener('click', function () {
  operate();
  removeActiveClasslist();
  btnSubtract.classList.add('active');
  userInputValue = Number(userInputValue);
  if (totalValue === 0) {
    initUserInput();
  } else {
    totalValue += userInputValue;
    resetUserInput();
  }
  displayInput.textContent = totalValue;
  populateEventDisplay();
});

btnMultiply.addEventListener('click', function () {
  userInputValue = Number(userInputValue);
  operate();
  removeActiveClasslist();
  btnMultiply.classList.add('active');

  if (totalValue === 0) {
    initUserInput();
  } else {
    if (btnMultiply.classList.contains('active')) {
      if (userInputValue || userInputText.textContent === '0') {
        totalValue *= userInputValue;
        resetUserInput();
      }
    } else {
      return;
    }
  }
  displayInput.textContent = totalValue;
  populateEventDisplay();
});
btnDivide.addEventListener('click', function () {
  operate();
  removeActiveClasslist();
  btnDivide.classList.add('active');
  userInputValue = Number(userInputValue);

  if (totalValue === 0) {
    initUserInput();
  } else {
    if (btnDivide.classList.contains('active')) {
      if (userInputValue || userInputText.textContent === '0') {
        totalValue *= userInputValue;
        resetUserInput();
      }
    } else {
      return;
    }
  }
  if (displayTotal.textContent === 'lol') {
    displayInput.textContent = 'lol';
  } else {
    displayInput.textContent = totalValue;
  }
  populateEventDisplay();
});

const clearAll = function () {
  removeActiveClasslist();
  userInputValue = '';
  totalValue = 0;
  displayInput.textContent = totalValue;
  displayTotal.textContent = 0;
  userInputText.textContent = 'a';
  decimalOnOff = true;
};

const addUserInput = function (e) {
  if (
    typeof userInputValue === 'undefined' ||
    userInputText.textContent !== 'a'
  ) {
    userInputValue += e.target.textContent;

    userInputText.textContent = `${userInputValue}`;
  } else {
    userInputValue += e.target.textContent;
    userInputText.textContent = `${userInputValue}`;
  }
  if (e.target.textContent === '.') {
    if (userInputValue === '0' || userInputValue === '.') {
      displayInput.textContent = `0.`;

      return;
    } else {
      displayInput.textContent = `${Number(userInputValue)}.`;
    }
  } else if (e.target.textContent === '0') {
    if (displayInput.textContent === '0') {
      return;
    } else {
      displayInput.textContent += `${e.target.textContent}`;
    }
  } else {
    displayInput.textContent = Number(userInputValue);
  }
};

const operate = function () {
  btnDecimal.addEventListener('click', addUserInput);

  displayInput.textContent = totalValue;
  decimalOnOff = true;

  if (userInputText.textContent !== 'a') {
    userInputValue = Number(userInputValue);
    totalValue = Number(totalValue);
    if (btnAdd.classList.contains('active')) {
      if (totalValue === 0) {
        initUserInput();
      } else {
        totalValue = userInputValue + totalValue;
        resetUserInput();
      }
    } else if (btnSubtract.classList.contains('active')) {
      if (totalValue === 0) {
        initUserInput();
      } else {
        totalValue = totalValue - userInputValue;
        resetUserInput();
      }
    } else if (btnMultiply.classList.contains('active')) {
      if (totalValue === 0) {
        initUserInput();
      } else {
        if (userInputValue === 0 && userInputText.textContent !== 'a') {
          totalValue = 0;
          displayInput.textContent = '0';
          resetUserInput();
          return;
        } else {
          userInputValue = Number(userInputValue);
          totalValue = totalValue * userInputValue;
          resetUserInput();
        }
      }
    } else if (btnDivide.classList.contains('active')) {
      if (totalValue === 0) {
        initUserInput();
      } else {
        if (userInputValue === 0 && userInputText.textContent !== 'a') {
          displayInput.textContent = 'lol';
          displayTotal.textContent = 'lol';
          return;
        } else {
          totalValue = totalValue / userInputValue;
          resetUserInput();
        }
      }
    } else {
      totalValue = userInputValue;
      displayTotal.textContent = totalValue;
      userInputValue = '';
    }
  }
};

btnEqual.addEventListener('click', operate);
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
btnDecimal.addEventListener('click', decimalSwitch);
btnDecimal.addEventListener('click', addUserInput);
btnClear.addEventListener('click', clearAll);
btnDelete.addEventListener('click', function () {
  userInputValue = userInputValue.slice(0, -1);
  displayInput.textContent = userInputValue;
});

// displayPreviousEvent.textContent = 'hey';
