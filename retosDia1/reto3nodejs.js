let readline = require('readline')
let fs = require('fs');


let rl = readline.createInterface(process.stdin, process.stdout);
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

            let dataPerson = JSON.stringify(person)

            fs.writeFile(`dataPerson.json`, dataPerson, function(err) {
                if (err) throw err;

                fs.readFile(`dataPerson.json`, "utf8", function(err, data) {
                    if (err) throw err;
                    console.log(JSON.parse(data));
                })
            });
        })
    })


})