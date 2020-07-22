// const add = require('./utils')
// console.log(add(2,3))
const validator = require('validator')

const notes = require('./notes')

const note = notes()

console.log(note)

console.log(validator.isURL('https://mead.io'))