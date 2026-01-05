const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

function sendRequest() {
    const request = new XMLHttpRequest();
    request.open('GET', `${url}`);
    request.send();

    request.addEventListener('load', function () {
        if (request.status === 200) {
            const data = JSON.parse((this.responseText));
            console.log(data.abilities[0].ability.url)
            try {
                request.open('GET', data.abilities[0].ability.url);
                request.send();
                request.addEventListener('load', function () {
                    if (request.status === 200) {
                        const data = JSON.parse((this.responseText));
                        data.effect_entries.forEach((item) => {
                            if (item.language.name === 'en') {
                                console.log(item)
                            }
                        })
                    } else {
                        console.log(`Request failed with status ${request.status}`)
                    }
                })
            } catch (error) {
                console.log('Json parse error')
            }
        } else {
            console.log(`Request failed with status ${request.status}`)
        }

    })
}

sendRequest();