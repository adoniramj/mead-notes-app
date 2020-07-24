const fs = require('fs')

// const book = {
//     title:'Think and Grow Rich',
//     author:'Napoleon Hill'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)


const bookBuffer = fs.readFileSync('1-json.json')

const book = JSON.parse(bookBuffer)

console.log(book.title)
console.log(typeof book)