'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

do {
    const input = prompt('Введите ваш пароль: ');

    if (passwords.includes(input)) {
        alert('Добро пожаловать!');
        break;
    } attemptsLeft -= 1;
    if (input === null) {
        break;
    } if (attemptsLeft) {
        alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    } else {
        alert('У вас закончились попытки, аккаунт заблокирован!');
    }
} while (attemptsLeft)
