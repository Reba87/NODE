let readWrite = require('./writeAndReadObject')
let create = require('./readConsole')

create.read(function(person) {
    readWrite.writeAndRead("prueba2.json", person)
})