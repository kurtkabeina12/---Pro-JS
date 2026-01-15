const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

function sendRequest(url, errorMessage, method = 'GET') {
	return fetch(url, {
		method
	})
		.then(response => {
			if (!response.ok) {
				throw new Error(`${errorMessage} ${response.status}`)
			}
			return response.json()
		})
}

sendRequest(url, 'Can not get pokemons')
	.then((data) => {
		return sendRequest(data.abilities[0].ability.url, 'cannot get english languages')
			.then((data) => {
				const data = JSON.parse((this.responseText));
				data.effect_entries.forEach((item) => {
					if (item.language.name === 'en') {
						console.log(item)
					}
				})
			})
			.catch((err) => console.log(err))
	})
