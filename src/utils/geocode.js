const request = require('request');

const geocode = (address, callback) => {
	const url =
		'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
		address +
		'.json?access_token=pk.eyJ1IjoicmVndWx1c2YiLCJhIjoiY2tuM2oxdmZlMWcwbTJ3cGNyN2E1b25hMiJ9.4LYcQseLHUM6UfHx4I7nUA';
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location server!', undefined);
		} else if (body.features.length === 0) {
			callback('Unable to find location, try again', undefined);
		} else {
			callback(undefined, {
				latitude: body.features[0].center[0],
				longititude: body.features[0].center[1],
				location: body.features[0].place_name,
			});
		}
	});
};

module.exports = geocode;
