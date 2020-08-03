const path = require('path')
const express = require('express')
const { resourceUsage } = require('process')

const app = express()

const publicDirectoryPath = path.join(__dirname,'../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))


app.get('', (req,res) => {
    let time = Date.now()
    res.render('index',{
        title: 'Weather app',
        name: 'Adoniram',
        time
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About us',
        name : 'Mr. Robot'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        message: 'Contact Mr. Roboto for assistance!'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        city : 'Miami',
        forecast : 'cloudy'
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})