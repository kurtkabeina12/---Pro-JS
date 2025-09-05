'use strict'

const timer = document.getElementById('timer');

function countdownToNewYear() {
    // Устанавливаем дату следующего Нового года
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const newYearDate = new Date(nextYear, 0, 1, 0, 0, 0);

    const interval = setInterval(() => {
        const now = new Date();
        const timeLeft = newYearDate - now;

        // Если время вышло
        if (timeLeft <= 0) {
            clearInterval(interval);
            timer.innerText = 'С Новым Годом! 🎉';
            return;
        }

        // Вычисляем дни, часы, минуты и секунды
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Форматируем вывод
        timer.innerText = `${days}д ${hours}ч ${minutes}м ${seconds}с`;

    }, 1000);
}

countdownToNewYear();