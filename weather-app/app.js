const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=77df5d14260314b81e60242f460d97dc&query=37.8267,-122.4233&units=f'

const url_mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=pk.eyJ1IjoiYWRvbmlyYW1qdmFyZ2FzIiwiYSI6ImNrOGt2NHVjajAyb2UzbGwzY202cm03NWIifQ.oOgGtyBlvosKgJx2TN8oNw&limit=1'

request({url, json: true},function(error, response){
  if(error){
    console.log('Unable to connect to weather service.') //lower level 
  } else if (response.body.error) {
    console.log(response.body.error.info)
  } else {
    const data = response.body.current
    const temp = data.temperature
    const precipitation = data.precip
    console.log(`It is currently ${temp} degrees and precipitation is ${precipitation}`)
  }
})

request({url : url_mapbox, json: true}, (error, response) => {
  if(error) {
    console.log('Unable to connect to mapbox')
  } else if (response.body.message || response.body.features.length == 0){
    console.log('Error processing query')
  } else {
    const [lat, long ] = response.body.features[0].geometry.coordinates
    console.log(lat, long)
  }
 
})
