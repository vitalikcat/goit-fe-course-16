'use strict';

const login = prompt("Введите пароль администратора!");
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

if (login !== null) {
    if (login === ADMIN_PASSWORD) {
        message = 'Добро пожаловать';
    } else {
        message = 'Доступ запрещен, неверный пароль!';  
    }
} else {
    message = 'Отменино пользователем';
}
alert(message);
