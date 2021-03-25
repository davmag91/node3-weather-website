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
            var {weather_descriptions,temperature,feelslike} = body.current;
            /*callback(undefined,{
                description: data.weather_descriptions[0],
                temperature: data.temperature,
                feelslike: data.feelslike
            })*/
            callback(undefined, weather_descriptions[0] + ". It is currently " + temperature + " degress out. It feels like " + feelslike + " degress out.")
        }
    })
}

module.exports = forecast