const request = require('request')

function weather (lat,long, callback) {

    let url = 'http://api.weatherstack.com/current?access_key=77df5d14260314b81e60242f460d97dc&query='+ lat +','+ long +'&units=f'
    
    request({url, json : true}, (error, { body }) => {
      if(error) {
        callback('Unable to connect to weather app')
      } else if (body.error) {
        callback('Error processing query')
      } else {
        callback(undefined,body.current)
      }
    })
  }

module.exports = { weather}