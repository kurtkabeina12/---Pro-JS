'use strict'

function getCurrentPosition() {
    return new Promise(async () => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}