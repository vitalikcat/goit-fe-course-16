'use strict';

const login = prompt("Введите пароль администратора!");
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

if (login != null) {
    if (login === ADMIN_PASSWORD) {
        let message = 'Добро пожаловать!';
        alert(message); 

    } else {
        let message = 'Доступ запрещен, неверный пароль!';
        alert(message);   
    }
} else {
    let message = 'Отменино пользователем';
    alert(message);
}

