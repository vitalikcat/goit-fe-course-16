'use strict';

let inputCountry = prompt ('Введите страну доставки товара:');
inputCountry = inputCountry.toLowerCase();

const chinaPrice = 100;
const southAmericaPrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const yamaykaPrice = 120;

switch (inputCountry) {
    case 'китай':
    console.log(`Доставка в ${inputCountry} будет стоить ${chinaPrice} кредитов`);
    break;

    case 'южная америка':
    console.log(`Доставка в ${inputCountry} будет стоить ${southAmericaPrice} кредитов`);
    break;

    case 'австралия':
    console.log(`Доставка в ${inputCountry} будет стоить ${australiaPrice} кредитов`);
    break;

    case 'индия':
    console.log(`Доставка в ${inputCountry} будет стоить ${indiaPrice} кредитов`);
    break;

    case 'Ямайка':
    console.log(`Доставка в ${inputCountry} будет стоить ${yamaykaPrice} кредитов`);
    break;

    default:
    console.log('В вашей стране доставка не доступна');
}
