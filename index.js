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
const digitButtons = document.querySelectorAll('.digits button');
const operatorButtons = document.querySelectorAll('.operators button');
const display = document.querySelector('.display');
const maxDisplayLength = 252;

let num1;
let operator;
let num2;

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

function operate(num1, operator, num2) {
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === 'x') {
    return multiply(num1, num2);
  } else {
    return divide(num1, num2);
  }
}

digitButtons.forEach((button) => {
  if (button.classList.item(1) === 'decimal') {
    button.addEventListener('click', (event) => {
      if (display.children[2] && !display.children[2].textContent.includes('.')) {
        if ((display.children[0].clientWidth + display.children[1].clientWidth + display.children[2].clientWidth) < maxDisplayLength) {
          display.children[2].textContent += event.target.textContent;
        }
      } else if (display.children[0] && !display.children[0].textContent.includes('.')) {
          if (display.children[0].clientWidth < maxDisplayLength) {
            display.children[0].textContent += event.target.textContent;
          }
      } 
    })
  } else {
      button.addEventListener('click', (event) => {
        if (display.children[2]) {
          if ((display.children[0].clientWidth + display.children[1].clientWidth + display.children[2].clientWidth) < maxDisplayLength) {
            display.children[2].textContent += event.target.textContent;
          }
        } else if (display.children[0]) {
            if (display.children[0].clientWidth < maxDisplayLength) {
              display.children[0].textContent += event.target.textContent;
            }
        } else {
            const displayValueNumber1 = document.createElement('span');
            displayValueNumber1.textContent = event.target.textContent;
            display.appendChild(displayValueNumber1);
        }
      })
  }
})

operatorButtons.forEach((button) => {
  if (button.classList.item(0) === 'clear') {
    button.addEventListener('click', () => {
      display.textContent = '';
    })
  } else if (button.classList.item(0) === 'equals') {
      button.addEventListener('click', () => {
        if (display.children.length === 3 && display.children[2].textContent) {
          num1 = +display.children[0].textContent;
          operator = display.children[1].textContent;
          num2 = +display.children[2].textContent;

          display.textContent = '';
          const displayValueNumber1 = document.createElement('span');
          displayValueNumber1.textContent = operate(num1, operator, num2);

          display.appendChild(displayValueNumber1);
        }
      })
  } else {
      button.addEventListener('click', (event) => {
        if (display.children[0] && !display.children[0].textContent.endsWith('.') && !display.children[1]) {
          const displayValueOperator = document.createElement('span');
          displayValueOperator.textContent = event.target.textContent;
          display.appendChild(displayValueOperator);
    
          const displayValueNumber2 = document.createElement('span');
          display.appendChild(displayValueNumber2);

        } else if (display.children[2].textContent && !display.children[2].textContent.endsWith('.')) {
            num1 = +display.children[0].textContent;
            operator = display.children[1].textContent;
            num2 = +display.children[2].textContent;

            display.textContent = '';
            const displayValueNumber1 = document.createElement('span');
            displayValueNumber1.textContent = operate(num1, operator, num2);

            display.appendChild(displayValueNumber1);

            const displayValueOperator = document.createElement('span');
            displayValueOperator.textContent = event.target.textContent;
            display.appendChild(displayValueOperator);
      
            const displayValueNumber2 = document.createElement('span');
            display.appendChild(displayValueNumber2);
        }
      })
  }
})