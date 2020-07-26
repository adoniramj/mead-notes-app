const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => note.title = title)
    if(!duplicateNote){
        notes.push({
            title,
            body})
        console.log(chalk.green('New note added'))
    } else {
        console.log(chalk.red('Duplicate note'))
    }

    saveNotes(notes)
}

const removeNote = title => {
    const notes = loadNotes()
    const updateNotes = notes.filter(note => note.title.toLowerCase() != title.toLowerCase())
    if (notes.length > updateNotes.length){
        saveNotes(updateNotes)
        console.log(chalk.green('Note removed!'))
    } else {
        console.log(chalk.red('No notes were removed'))
    }
}

const readNote = title => {
    const notes = loadNotes()
    const note = notes.find(note => note.title.toLowerCase() === title.toLowerCase())
    if(note){
        console.log(`Title: ${note.title}`)
        console.log(`Description: ${note.body}`)
    } else {
        console.log(chalk.red('There is no note with that title!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green('Here are your notes:'))
    notes.forEach(note => console.log(note.title));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveNotes = notes => {
    const notesString = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesString)
}

module.exports = {getNotes, addNote, removeNote, listNotes, readNote}