'use strict'

async function race(promises) {
    return await Promise.race(promises);
}

const p1 = new Promise(resolve => setTimeout(() => resolve('first'), 100));
const p2 = new Promise(resolve => setTimeout(() => resolve('second'), 200));

race([p1, p2]).then(result => console.log(result));

