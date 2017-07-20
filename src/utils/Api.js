import axios from 'axios';

const pub = '41ac4a2096f2416eb7cc039c19a371b3';
const baseURL = 'https://gateway.marvel.com:443/v1/public/';

export function searchByTitle(endpoint) {
	axios.get(baseURL + 'series?title=' + endpoint + '&apikey=' + pub)
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
}
