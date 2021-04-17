console.log('Client side JS file is loaded!');

fetch('http://puzzle.mead.io/puzzle').then((res) => {
	res.json().then((data) => {
		console.log(data);
	});
});

fetch('/weather?address=boston').then((res) => {
	res.json().then((data) => {
		if (data.error) {
			console.log(data.error);
		} else {
			console.log(data.location);
			console.log(data.forecast);
		}
	});
});

const formWeather = document.querySelector('form');
const search = document.querySelector('input');
const msgOne = document.querySelector('#message-1');
const msgTwo = document.querySelector('#message-2');

formWeather.addEventListner('submit', (e) => {
	e.preventDefautl();

	msgOne.textContent = 'Loading...';
	msgTwo.textContent = '';

	const location = search.value;
	fetch('/weather?address' + location).then((res) => {
		res.json().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				console.log(data.location);
				console.log(data.forecast);
			}
		});
	});
});
