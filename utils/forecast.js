const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&appid=d3cd36de441b96dd8a10f9e413665264'
    request({
        url,
        json: true
    }, (error, res) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (res.error) {
            callback('Unable to find location', undefined)
        } else {
            //   console.log(res)
            callback(undefined, [
                res.body.current.weather[0].main,
                res.body.current.humidity
            ])

        }
    })
}

module.exports = forecast