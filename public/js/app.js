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

	const retrieveTemp = async (location) => {
		const response = await fetch('http://localhost:3000/weather?address=' + location)
		const data = await response.json()
		if (data.error) {
			return messageTwo.textContent = data.error
		}

		const {location, temperature, weather, winds} = data 
		const message = `The current temperature is ${temperature} degrees, winds from the ${winds}, and ${weather.toLowerCase()} skies`
		messageOne.textContent = `Location: ${location}`
		messageTwo.textContent = message
		search.value = ''
	}

	retrieveTemp(location)
})

