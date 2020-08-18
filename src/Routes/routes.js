const coordinates = require('../utils/coodinates')
const weatherRetrival = require('../utils/weatherRetrival')



module.exports = app => {
  app.get('/', (req, res) => {
    let time = Date.now()
    res.render('index', {
      message: 'Hello',
      title: 'Weather',
      name: 'Adoniram',
      time,
      info: 'Copyright something',
    })
  })
  
  app.get('/about', (req, res) => {
    res.render('about', {
      title: 'About us',
      name: 'Adoniram J. Vargas',
      info: 'Copyright something',
    })
  })
  
  app.get('/help', (req, res) => {
    res.render('help', {
      message: 'Contact Mr. Roboto for assistance!',
      title: 'Help',
      name: 'Adoniram',
      info: 'Copyright something',
    })
  })
  
  app.get('/weather', (req, res) => {
    address = req.query.address
    if (!address) {
      return res.send({ error: 'Address not provided!' })
    }
    coordinates(address, (error, lat, long, place_name) => {
      if (error) {
        return res.send({ error })
      }
      weatherRetrival(lat, long, (error, temperature, weather_descriptions, winds) => {
          if (error) {
            return res.send({ error })
          }
          res.send({ lat, long, location: place_name, temperature, weather: weather_descriptions, winds })
        }
      )
    })
  })
  
  app.get('/products', (req, res) => {
    if (!req.query.search) {
      return res.send({ error: 'You must provide a search term' })
    }
    res.send({ products: [] })
  })
  
  app.get('/help/*', (req, res) => {
    res.render('404', {
      message: 'No help',
    })
  })
  
  app.get('*', (req, res) => {
    res.render('404', {
      title: '404',
      message: 'This page does not exist!',
    })
  })
}