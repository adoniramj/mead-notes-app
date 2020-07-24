const fs = require('fs')

const getNotes = function(){
    return 'Your notes...'
}

const addNote = function(title,body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => {
        return note.title.toLowerCase() === title.toLowerCase()
    })
    
    console.log(duplicateNotes)

    if(duplicateNotes.length == 0){
        notes.push({
            title,
            body})
    }
    saveNotes(notes)
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

module.exports = {getNotes, addNote}