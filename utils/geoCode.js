const request = require('request');

const geoCode = (location, callback) => {
    const url = `https://geocode.maps.co/search?q=${location}&api_key=6985d274d0116823387210tcs4e2daf&limit=1`;

    request({ url, json: true }, (err, res) => {
        if (err) {
            callback('unable to connect to location service', undefined);
        } else if (!res.body.length) {
            callback('unable to find location', undefined);
        } else {
            callback(undefined, {lat: res.body[0].lat, lon: res.body[0].lon});
        }
    });
} 

module.exports = geoCode