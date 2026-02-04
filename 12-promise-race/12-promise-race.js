'use strict'

async function race(arr) {
    const res = await Promise.race([
        arr
    ])
    console.log(res)
}

race()