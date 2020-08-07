const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector("#message-2")
messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageTwo.textContent = 'loading data'
    messageOne.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageTwo.textContent = data.error
            }else {
                const {location, temperature, weather, winds} = data
                const message = `The current temperature is ${temperature} degrees, winds from the ${winds}, and ${weather.toLowerCase()} skies`
                messageOne.textContent = `Location: ${location}`
                messageTwo.textContent = message
                search.value = ''
            }
        })
    })
    

})