'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число:');
  if(input === null) {
    break;
  }
  input = Number(input);
  if(Number.isNaN(input)) {
    alert('Было введено не число, попробуйте ещё раз!');
  } else {
    numbers.push(input);    
  }
} if (numbers.length) {
    for (const number of numbers ) {
    total += number;  
  }
}
console.log(`Общая сумма чисел равна ${total}`);

