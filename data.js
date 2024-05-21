const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=inception';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73a1c64b95mshed39c679117b5bcp181168jsnae5186a05b3f',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch(url, options)
	.then(response => response.json())
	.then(data => {
		const list = data.d;

		list.forEach(item => {
			const name = item.l;
			const poster = item.i.imageUrl;
			const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`;
			document.querySelector('.movies').innerHTML += movie;
		});
	})
	.catch(error => console.error(error));
	