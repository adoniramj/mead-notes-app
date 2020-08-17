const path = require('path')

const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

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
	// executing geocode
	geocode.geocode(address, (error, {lat, long, location} = {}) => { //start callback
		if (error) {
			return res.send({ error })
		}
		weather.weather(lat, long , (error, forecast) => { //inner callback
			if(error){
				return res.send({ error })
			}
			const { temperature, weather_descriptions, wind_dir:winds } = forecast //destructuring
			//final response
			res.send({
				lat,
				long,
				location,
				temperature,
				weather : weather_descriptions[0],
				winds
			})
		}) // end inner callback
	}) //end callback
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