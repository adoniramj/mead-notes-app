const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const city = process.argv[2]

if (!city) {
  return console.log('Please provide a city')
}

geocode.geocode(city, (error, {lat, long, location} = {}) => {
  if(error) {
    return console.log(error)
  }
  weather.weather(lat,long, (error, forecast) => {
    if(error) {
      return console.log(error)
    }
    const {temperature, weather_descriptions:weather} = forecast
    console.log(`The temperature and weather for ${location}`)
    console.log(`The temperatue is ${temperature} and a forecast of ${weather[0]}`)
  })
})

