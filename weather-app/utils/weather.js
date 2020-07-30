const request = require('request')

function weather (lat,long, callback) {
    console.log(lat,long)
    let url = 'http://api.weatherstack.com/current?access_key=77df5d14260314b81e60242f460d97dc&query='+ lat +','+ long +'&units=f'
    console.log(url)
    request({url, json : true}, (error, response) => {
      if(error) {
        callback('Unable to connect to weather app', undefined)
      } else if (response.body.error) {
        callback('Error processing query', undefined)
      } else {
        callback(undefined,response.body.current)
      }
    })
  }

function weatherOutput (error, data) {
    if(error) {
        console.log(error)
      } else {
        console.log(data)
    }
}

module.exports = { weather, weatherOutput }