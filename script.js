'use strict';
let userInputValue = '';
let totalValue = 0;
let decimalOnOff = true;
let zeroAddReplace = true;
let equalButtonOnOff = true;
let multiplyDivideSum0 = true;
let symbol;
const division = '\u{00F7}';

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

btnDivide.textContent = division;

function removeActiveClasslist() {
  btnAdd.classList.remove('active');
  btnSubtract.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnDivide.classList.remove('active');
  btnEqual.classList.remove('active');
  userInputValue = Number(userInputValue);
}
function initUserInput() {
  console.log('test inituser input');
  // if (multiplyDivideSum0) {
  console.log('inside init');
  totalValue = Number(userInputValue);
  userInputText.textContent = 'a';
  userInputValue = '';
  // } else {
  //   console.log('outside it');
  // }
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
};

const equalSwitch = function () {
  if (equalButtonOnOff) {
    btnEqual.addEventListener('click', operate);
    equalEventDisplay();
    equalButtonOnOff = false;
  } else {
    btnEqual.removeEventListener('click', operate);
  }
};

function hello() {
  if (totalValue === 0) {
    return `${totalValue}`;
  } else {
    return `${totalValue}`;
  }
}

const getSymbol = function () {
  if (btnAdd.classList.contains('active')) {
    return (symbol = '+');
  } else if (btnSubtract.classList.contains('active')) {
    return (symbol = '-');
  } else if (btnMultiply.classList.contains('active')) {
    return (symbol = 'x');
  } else if (btnDivide.classList.contains('active')) {
    return (symbol = `${division}`);
  }
};
function populateEventDisplay() {
  displayInput.textContent = totalValue;
  if (totalValue !== 0) {
    return (displayPreviousEvent.textContent = `${hello()} ${symbol}`);
  } else {
    console.log('jaysus');
    return (displayPreviousEvent.textContent = `${hello()} ${symbol}`);
  }
}

function equalEventDisplay() {
  if (btnAdd.classList.contains('active')) {
    displayPreviousEvent.textContent = `${totalValue} + ${Number(
      userInputValue
    )} =`;
  } else if (btnSubtract.classList.contains('active')) {
    displayPreviousEvent.textContent = `${totalValue} - ${Number(
      userInputValue
    )} =`;
  } else if (btnMultiply.classList.contains('active')) {
    displayPreviousEvent.textContent = `${totalValue} x ${Number(
      userInputValue
    )} =`;
  } else if (btnDivide.classList.contains('active')) {
    displayPreviousEvent.textContent = `${totalValue} ${division} ${Number(
      userInputValue
    )} =`;
  } else if (btnEqual.classList.contains('active')) {
    console.log('well');
    displayPreviousEvent.textContent = totalValue;
  }
}

btnAdd.addEventListener('click', function () {
  equalButtonOnOff = true;
  operate();
  removeActiveClasslist();
  btnAdd.classList.add('active');
  getSymbol();
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
  equalButtonOnOff = true;

  operate();
  removeActiveClasslist();
  btnSubtract.classList.add('active');
  getSymbol();

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
  equalButtonOnOff = true;

  userInputValue = Number(userInputValue);
  operate();
  removeActiveClasslist();
  btnMultiply.classList.add('active');
  getSymbol();

  if (totalValue === 0) {
    if (multiplyDivideSum0) {
      console.log(multiplyDivideSum0 + '!!');
      initUserInput();
      console.log('click multiply');
    } else {
      console.log(totalValue, userInputValue);
      console.log('click multiply');
      totalValue = 0;
    }
  } else {
    if (multiplyDivideSum0) {
      if (btnMultiply.classList.contains('active')) {
        if (userInputValue || userInputText.textContent === '0') {
          totalValue *= userInputValue;
          resetUserInput();
        }
      } else {
        return;
      }
    }
  }
  displayInput.textContent = totalValue;
  populateEventDisplay();
  multiplyDivideSum0 = false;
});
btnDivide.addEventListener('click', function () {
  equalButtonOnOff = true;

  operate();
  removeActiveClasslist();
  btnDivide.classList.add('active');
  getSymbol();

  userInputValue = Number(userInputValue);

  if (totalValue === 0) {
    if (multiplyDivideSum0) {
      console.log('divid shei');
      initUserInput();
    }
  } else {
    if (multiplyDivideSum0) {
      if (btnDivide.classList.contains('active')) {
        if (userInputValue || userInputText.textContent === '0') {
          totalValue *= userInputValue;
          resetUserInput();
        }
      } else {
        return;
      }
    }
  }
  if (displayTotal.textContent === 'lol') {
    displayInput.textContent = 'lol';
  } else {
    displayInput.textContent = totalValue;
  }
  populateEventDisplay();
  multiplyDivideSum0 = false;
});

const clearAll = function () {
  removeActiveClasslist();
  btnEqual.classList.add('active');
  displayPreviousEvent.textContent = '';
  userInputValue = '';
  totalValue = 0;
  displayInput.textContent = totalValue;
  displayTotal.textContent = 0;
  userInputText.textContent = 'a';
  decimalOnOff = true;
  equalButtonOnOff = true;
  multiplyDivideSum0 = true;
  console.log(multiplyDivideSum0);
};

const addUserInput = function (e) {
  if (equalButtonOnOff || totalValue === 0) {
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
        if (zeroAddReplace) {
          displayInput.textContent += `${e.target.textContent}`;
        } else {
          displayInput.textContent = `${e.target.textContent}`;
        }
      }
    } else {
      displayInput.textContent = Number(userInputValue);
    }
    zeroAddReplace = true;
  }
};

const operate = function () {
  if (totalValue === 0) {
    if (multiplyDivideSum0) {
      console.log('hey');
      initUserInput();
    } else {
      console.log('strot');
    }
  }
  populateEventDisplay();
  equalEventDisplay();
  btnDecimal.addEventListener('click', addUserInput);

  decimalOnOff = true;
  zeroAddReplace = false;

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
        if (multiplyDivideSum0) {
          initUserInput();
          console.log('well!!');
          console.log(multiplyDivideSum0 + 'operate multiply');
        } else {
          console.log('operate multiply');
          console.log(totalValue, userInputValue);
        }
      } else {
        if (userInputValue === 0 && userInputText.textContent !== 'a') {
          totalValue = 0;
          displayInput.textContent = totalValue;
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
        if (multiplyDivideSum0) {
          initUserInput();
        }
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
    } else if (btnEqual.classList.contains('active')) {
      if (multiplyDivideSum0) {
        console.log('please');
        totalValue = userInputValue;
      }
    }
    displayTotal.textContent = totalValue;
    userInputValue = '';
    resetUserInput();
  }
  // displayInput.textContent = totalValue;
  removeActiveClasslist();
  btnEqual.classList.add('active');

  multiplyDivideSum0 = false;
  console.log(multiplyDivideSum0);
  console.log(userInputValue, totalValue);
};

btnEqual.addEventListener('click', equalSwitch);
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
