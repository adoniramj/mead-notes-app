//retrieve coordinates from geocode given the city name
const axios = require('axios')
const keys = require('../config/keys')

const coordinates = async (address, callback) => {
  console.log(keys.mapBox);

  let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
  encodeURIComponent(address) + '.json?access_token=' + encodeURIComponent(keys.mapBox) + '&limit=1'

  try {
    const response = await axios.get(url)
    
    if(response.data.features.length == 0){
      return callback('The address is not in the system')
    }

    const { center, place_name } = response.data.features[0]
    const [long, lat] = center
    callback(undefined,lat, long, place_name)
    
  } catch (error) {
    callback('Unable to retrieve data')
  }
}

module.exports = coordinates