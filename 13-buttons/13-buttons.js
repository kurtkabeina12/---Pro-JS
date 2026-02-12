'use strict'

const homeBLock = document.querySelector('.blocks');
const tap = document.querySelector('.tap-blocks');
let counter = 0;
tap.textContent = `${counter}`

for (let i = 0; i < 5; i++) {
    const block = document.createElement('button');
    block.className = 'but' + [i];
    block.setAttribute('data-id', i);
    block.textContent = 'Нажми меня';
    homeBLock.appendChild(block)
}

homeBLock.addEventListener('click', (e) => {
    counter += 1;
    const but_id = e.target.getAttribute('data-id');
    const but = document.querySelector(`.but${but_id}`)
    but.textContent = 'Кнопка нажата';
});

