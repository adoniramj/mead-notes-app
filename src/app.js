const path = require('path')

const express = require('express')
const hbs = require('hbs')

const app = express()

// public directory
console.log(__dirname)
const publicDirectoryPath = path.join(__dirname, '../public')

// hbs views locations
const viewsPath = path.join(__dirname, '..', '/templates', '/views')
const partialsPath = path.join(__dirname, '..', '/templates', '/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath)) //searches public folder for a match

require('./Routes/routes')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
