

fetch('http://localhost:3000/weather?address=Miami').then(response => response.json()).then(data => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data)
        }
    })


fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=pk.eyJ1IjoiYWRvbmlyYW1qdmFyZ2FzIiwiYSI6ImNrOGt2NHVjajAyb2UzbGwzY202cm03NWIifQ.oOgGtyBlvosKgJx2TN8oNw&limit=1').
then(response => response.json()).then(data => {
    console.log(data.features[0].geometry)
})