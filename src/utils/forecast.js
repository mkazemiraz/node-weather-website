const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/10ad8c10fd1f721ebee2c507aeea0041/' + latitude + ',' + longitude + '?units=si';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            let currently = body.currently;
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + currently.temperature + ' degrees out. There is a ' + currently.precipProbability + '% chance of rain.');
        }
    });
}

module.exports = forecast;