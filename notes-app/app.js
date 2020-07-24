const yargs = require('yargs')
const chalk = require('chalk')

const notes = require('./notes')


// Customize yargs version

yargs.version('1.1.0')

// add, remove, read, list  distinct commands

// Create add command

yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe : 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove a note'
        }
    },
    handler: function() {
        console.log('Removing a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'Shows all notes',
    handler: function() {
        console.log('Showing all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler : function() {
        console.log('Reading a note')
    }
})

yargs.parse()
//console.log(yargs.argv)
//console.log(process.argv)

