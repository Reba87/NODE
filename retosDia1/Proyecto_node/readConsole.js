let readline = require('readline')
let callback = require('./writeAndReadObject')
let rl = readline.createInterface(process.stdin, process.stdout);

function read(callback) {
    let person = {
        name: "",
        surname: "",
        age: ""

    }

    rl.question(`What is your name? `, (respuesta) => {
        person.name = respuesta
        rl.setPrompt()
        rl.question(`What is your surname? `, (respuesta2) => {
            person.surname = respuesta2
            rl.setPrompt();

            rl.question(`What is your age? `, (respuesta3) => {
                person.age = respuesta3
                rl.setPrompt();
                rl.close()

                callback(JSON.stringify(person));
            })
        })


    })
}

export { read }