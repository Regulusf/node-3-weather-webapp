const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));
// Home page rendering
app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Regy',
	});
});
// About page rendering
app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'Regulus',
		// img: '',
	});
});

// Help page rendering

app.get('/help', (req, res) => {
	res.render('help', {
		helpText: 'Help Resources',
		title: 'This is Help',
		name: 'Regulus Fosso',
	});
});

app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: 'You must provide an address!',
		});
	}

	/*geocode(req.query.address, (error, {latitude, longititude, location})=>{
		if(error){
			return res.send({error})
		}
		forecast(latitude, longititude, forecastData)=>{
			if(error){
				return res.send({error})
			}
		}
		res.send({
			forecast: forecast,
			location,
			address: req.query.address 
		})

	}) */
	// res.send({
	// 	forecast: 'Temperature',
	// 	location: 'Toronto',
	// 	address: req.query.address
	// });
});

// Query weather app
app.get('/products', (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: 'You must provide a search term',
		});
	}
	console.log(req.query.search);
	res.send({
		products: [],
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Regulus',
		errorMessage: 'Help article not found!',
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		errorMessage: 'Page Not Found!',
	});
});

// Start up the server and

app.listen(3000, () => {
	console.log('Server is up on PORT:3000');
});
