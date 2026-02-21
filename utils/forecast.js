const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = `https://api.weatherapi.com/v1//forecast.json?key=4db4caf5ad0f4b1f9a962756250712&q=${lat},${lon}`

    request({ url, json: true }, (err, res) => {
        if (err) {
            callback('unable to connect to weater service', undefined);
        } else if (res.body.error) {
            callback('unable to find location', undefined);
        } else {
            callback(undefined, `${res.body.forecast.forecastday[0].day.condition.text}. It is currently ${res.body.current.temp_c} degrees out. There is ${res.body.forecast.forecastday[0].day.daily_chance_of_rain}% chance of rain.`);
        }
    })
}

module.exports = forecast