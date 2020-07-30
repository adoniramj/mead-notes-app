setTimeout(()=> {
    console.log('Two second wait')
},2000)

const names = ['John', 'Mike ']

const geocode = (address, callback) => {
    setTimeout(()=> {
        const data = {
            lat : 0,
            long : 0
        }
        callback(data)

    },2000)
}

// geocode('Miami', (data) => {
//     console.log(data)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    setTimeout(() => {
       const sum = a + b
       callback(sum)   
    },2000)
}

add(1, 4, (sumx) => {
    console.log(sumx) // Should print: 5
})