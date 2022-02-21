const readline = require("readline");
const fs = require("fs/promises");

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

function getJson() {
    fs.writeFile(`persona2.json`, JSON.stringify(persona2))
        .then(() => {
            return fs.readFile(`persona2.json`, "utf8");
        })
        .then((data) => {
            console.log(JSON.parse(data));
        })
        .catch((err) => {
            console.log(err);
        });
}

let persona2 = {
    name: "",
    surname: "",
    age: "",
};

pregunta("What is your name?")
    .then((result) => {
        persona2.name = result;
        return pregunta("What`s your surname?");
    })
    .then((result) => {
        persona2.surname = result;
        return pregunta("What`s your age? ");
    })
    .then((result) => {
        persona2.age = result;
        return getJson(persona2);
    })
    .catch((err) => {
        console.error(err);
    });