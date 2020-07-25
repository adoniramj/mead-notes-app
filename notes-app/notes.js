const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return 'Your notes...'
}

const addNote = function(title,body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => {
        return note.title.toLowerCase() === title.toLowerCase()
    })

    if(duplicateNotes.length == 0){
        notes.push({
            title,
            body})
        console.log(chalk.green('New note added'))
    } else {
        console.log(chalk.red('Duplicate note'))
    }

    saveNotes(notes)

}

const removeNote = function(title){
    const notes = loadNotes()
    const updateNotes = notes.filter(note => {
        return note.title.toLowerCase() != title.toLowerCase()
    })
    if (notes.length > updateNotes.length){
        saveNotes(updateNotes)
        console.log(chalk.green('Note removed!'))
    } else {
        console.log(chalk.red('No notes were removed'))
    }

}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveNotes = function(notes) {
    const notesString = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesString)
}

module.exports = {getNotes, addNote, removeNote}