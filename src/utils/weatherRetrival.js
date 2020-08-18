// this functions retrieves the weather from weatherStack
// the lat long come from coodinates.js

const axios = require('axios')
const keys = require('../config/keys')

const weatherRetrival = async (lat, long, callback) =>{
  const url  = 'http://api.weatherstack.com/current?access_key=' + keys.weatherStack +'&query='+ lat +','+ long +'&units=f'
 
  try {
    const response = await axios.get(url)
    const { temperature, weather_descriptions, wind_dir:winds }  = response.data.current

    callback(undefined, temperature, weather_descriptions[0], winds)
    
  } catch (error) {
    callback('Unable to retrieve weather report')
  }

  
}

module.exports = weatherRetrival