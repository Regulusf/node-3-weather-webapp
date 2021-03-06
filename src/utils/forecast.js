const request = require('request');

const forecast = (latitude, longititude, callback) => {
	const url =
		'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmVndWx1c2YiLCJhIjoiY2tuM2oxdmZlMWcwbTJ3cGNyN2E1b25hMiJ9.' +
		latitude +
		',' +
		longititude +
		',';
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to serve!', undefined);
		} else if (body.features[0].length === 0) {
			callback('Unable to find location Coordinates!');
		} else {
			callback(undefined, {
				latitude: body.features[0].center[0],
				longititude: body.features[0].center[1],
				location: body.features[0].place_name,
			});
		}
	});
};

module.exports = forecast;
