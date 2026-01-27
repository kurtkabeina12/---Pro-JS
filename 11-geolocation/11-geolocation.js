'use strict'

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

getCurrentPosition()
    .then(position => {
        console.log('Широта:', position.coords.latitude);
        console.log('Долгота:', position.coords.longitude);
        console.log('Точность:', position.coords.accuracy, 'метров');
    })
    .catch(error => {
        console.error('Ошибка получения геолокации:', error.message);
    })