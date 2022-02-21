const fs = require('fs/promises');

let persona = {
    name: "Andrea",
    surname: "Cartocho",
    age: 23
}

fs.writeFile(`persona.json`, JSON.stringify(persona))
    .then(() => {
        return fs.readFile(`persona.json`, "utf8")
    })
    .then(data => {
        console.log(JSON.parse(data));
    })
    .catch(err => {
        console.log(err);
    })