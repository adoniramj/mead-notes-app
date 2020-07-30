const request = require('request')

const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

geocode.geocode('Miami', (error, data) =>{
  if(error) {
    console.log(error)
  }
  // weather.weather(data.lat,data.long, (error, data) => {
  //   if(error) {
  //     console.log(error)
  //   } else {
  //     console.log(data)
  //   }
  // })
  weather.weather(data.lat, data.long, weather.weatherOutput)
})

