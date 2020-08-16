const request = require('request')

function geocode(address, callback){
  let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRvbmlyYW1qdmFyZ2FzIiwiYSI6ImNrOGt2NHVjajAyb2UzbGwzY202cm03NWIifQ.oOgGtyBlvosKgJx2TN8oNw&limit=1'
  request({url, json : true}, (error, { body }) => {
    if(error) { // request error
      callback('Unable to connect to mapbox') //error messages
    } else if (body.message || body.features.length == 0) {
      callback('Error processing query') //error message
    } else {
      const long = body.features[0].center[0]
      const lat = body.features[0].center[1]
      const location = body.features[0].place_name
      
      callback(undefined, {lat, long, location})
    }
  })
  }

  module.exports = { geocode }