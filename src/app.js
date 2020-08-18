const path = require('path')

const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const weather = require('./utils/weather')
const coordinates = require('./utils/coodinates')
const weatherRetrival = require('./utils/weatherRetrival')
const { response } = require('express')

const app = express()

// public directory
const publicDirectoryPath = path.join(__dirname,'../public')

// hbs views locations
const viewsPath = path.join(__dirname,'..','/templates','/views')
const partialsPath = path.join(__dirname,'..','/templates','/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath)) //searches public folder for a match

app.get('/', (req,res) => {
	let time = Date.now()
	res.render('index',{
		message : 'Hello',
		title: 'Weather',
		name: 'Adoniram',
		time,
		info : 'Copyright something'
	})
})

app.get('/about', (req,res) => {
	res.render('about', {
		title: 'About us',
		name : 'Mr. Robot',
		info : 'Copyright something'
	})
})

app.get('/help', (req,res) => {
	res.render('help', {
		message: 'Contact Mr. Roboto for assistance!',
		title: "Help",
		name: 'Adoniram',
		info : 'Copyright something'
	})
})

app.get('/weather', (req, res) => { 
	address = req.query.address
	if (!address) {
		return res.send({ error : 'Address not provided!'})
	}
	coordinates(address, (error,lat, long, place_name) => {
		if(error){
			return res.send({ error })
		} 
		weatherRetrival(lat,long, (error, temperature, weather_descriptions, winds) => {
			if(error){
				return res.send({ error })
			}
			res.send({lat, long, location : place_name, temperature, weather : weather_descriptions, winds})
		})
		
	})
})

app.get('/products', (req,res) => {
    if(!req.query.search){
        return res.send({error : 'You must provide a search term'})
    }
    res.send({ products : []})
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        message : 'No help'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        message : 'This page does not exist!'
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT,() => {
  console.log(`Listening on port ${PORT}`);
})