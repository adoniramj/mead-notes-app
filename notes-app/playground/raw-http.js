const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=77df5d14260314b81e60242f460d97dc&query=37.8267,-122.4233&units=f'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()

    })

    response.on('end', (params) => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', error => {
    console.log(error)
})

request.end()