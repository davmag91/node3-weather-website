const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=781bb49e9f8db320d957c2810fdb05bb&query=' + lat + ',' + long + '&units=f'

    request({url, json: true},(error, { body }) => {
        if(error)
        {
            callback('Unable to connect to weather service!')
        }else if(body.error){
            callback('Unable to find location')
        }else{
            var {weather_descriptions,temperature,feelslike,humidity} = body.current;
            callback(undefined, weather_descriptions[0] + ". It is currently " + temperature + " degress out. It feels like " + feelslike + " degress out. The humdity is " + humidity + "%")
        }
    })
}

module.exports = forecast