const request = require('request')

function geocode(address, callback){
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRvbmlyYW1qdmFyZ2FzIiwiYSI6ImNrOGt2NHVjajAyb2UzbGwzY202cm03NWIifQ.oOgGtyBlvosKgJx2TN8oNw&limit=1'
    request({url, json : true}, (error, response) => {
      if(error) {
        callback('Unable to connect to mapbox', undefined)
      } else if (response.body.message || response.body.features.length == 0) {
        callback('Error processing query', undefined)
      } else {
        const long = response.body.features[0].center[0]
        const lat = response.body.features[0].center[1]
        const location = response.body.features[0].place_name
        callback(undefined,{lat, long, location})
      }
    })
  }

  module.exports = { geocode }