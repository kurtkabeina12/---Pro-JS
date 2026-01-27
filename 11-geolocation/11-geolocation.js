'use strict'

function getCurrentPosition(position) {
    return new Promise(async (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
        try {
            const data = await response.json();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}