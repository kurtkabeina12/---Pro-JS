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

        // Вычисляем месяцы, дни, часы, минуты и секунды
        const totalSeconds = Math.floor(timeLeft / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);

        const months = Math.floor(totalDays / 30.44); // Среднее количество дней в месяце
        const days = totalDays % 30;
        const hours = totalHours % 24;
        const minutes = totalMinutes % 60;
        const seconds = totalSeconds % 60;

        // Форматируем вывод в полном формате
        const parts = [];
        if (months > 0) parts.push(`${months} ${getMonthWord(months)}`);
        if (days > 0) parts.push(`${days} ${getDayWord(days)}`);
        if (hours > 0) parts.push(`${hours} ${getHourWord(hours)}`);
        if (minutes > 0) parts.push(`${minutes} ${getMinuteWord(minutes)}`);
        if (seconds > 0) parts.push(`${seconds} ${getSecondWord(seconds)}`);

        timer.innerText = parts.join(', ');

    }, 1000);
}

// Вспомогательные функции для правильного склонения слов
function getMonthWord(months) {
    if (months % 10 === 1 && months % 100 !== 11) return 'месяц';
    if (months % 10 >= 2 && months % 10 <= 4 && (months % 100 < 10 || months % 100 >= 20)) return 'месяца';
    return 'месяцев';
}

function getDayWord(days) {
    if (days % 10 === 1 && days % 100 !== 11) return 'день';
    if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20)) return 'дня';
    return 'дней';
}

function getHourWord(hours) {
    if (hours % 10 === 1 && hours % 100 !== 11) return 'час';
    if (hours % 10 >= 2 && hours % 10 <= 4 && (hours % 100 < 10 || hours % 100 >= 20)) return 'часа';
    return 'часов';
}

function getMinuteWord(minutes) {
    if (minutes % 10 === 1 && minutes % 100 !== 11) return 'минута';
    if (minutes % 10 >= 2 && minutes % 10 <= 4 && (minutes % 100 < 10 || minutes % 100 >= 20)) return 'минуты';
    return 'минут';
}

function getSecondWord(seconds) {
    if (seconds % 10 === 1 && seconds % 100 !== 11) return 'секунда';
    if (seconds % 10 >= 2 && seconds % 10 <= 4 && (seconds % 100 < 10 || seconds % 100 >= 20)) return 'секунды';
    return 'секунд';
}

countdownToNewYear();