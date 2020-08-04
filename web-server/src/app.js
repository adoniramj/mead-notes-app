const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'..','/templates','/views')
const partialsPath = path.join(__dirname,'..','/templates','/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath)) //searches the public folder for a match

app.get('', (req,res) => {
    let time = Date.now()
    res.render('index',{
        message : 'Hello',
        title: 'Hi',
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
    res.send({
        city : 'Miami',
        forecast : 'cloudy'
    })
})

app.get('/html', (req,res) => {
    res.send('<h1>Some html</h1>')
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

app.listen(3000, () => {
    console.log('Listening on port 3000')
})