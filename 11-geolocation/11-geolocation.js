'use strict'

function getCurrentPosition(position) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            resolve(data);
        } catch (error) {
            reject(error)
        }
    })
}