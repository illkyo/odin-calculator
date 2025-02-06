// TEST DYNAMIC GENERATION OF CALCULATOR
// const digitsContainer = document.querySelector('.digits');

// for (let i = 0; i < 10; i += 3) {
//   const rowContainer = document.createElement('div');
//   rowContainer.classList.add('row');
//   if (i === 9) {
//     const digit = document.createElement('button');
//     digit.textContent = i;
//     digit.classList.add('digit');
//     rowContainer.appendChild(digit);
//   } else {
//     for (let j = 0; j < 3; j++) {
//       const digit = document.createElement('button');
//       digit.textContent = j + i;
//       digit.classList.add('digit');
//       rowContainer.appendChild(digit);
//     }
//   }
//   digitsContainer.appendChild(rowContainer);
// }
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach((button) => {
  if (button.classList.item(0) === 'clear' || button.classList.item(0) === 'equals') {
    button.addEventListener('click', () => {
      display.textContent = '';
    })
  } else {
    button.addEventListener('click', (event) => {
      if (display.children.length <= 20) {
        const displayValue =  document.createElement('span');
        displayValue.textContent = event.target.textContent;
        
        display.appendChild(displayValue);
      }
    })
  }
})

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

let num1;
let operator;
let num2;

function operate(num1, operator, num2) {
  let result;
  if (operator === '+') {
    result = add(num1, num2);
  } else if (operator === '-') {
    result = subtract(num1, num2);
  } else if (operator === 'x') {
    result = multiply(num1, num2);
  } else {
    result = divide(num1, num2);
  }
  return result
}