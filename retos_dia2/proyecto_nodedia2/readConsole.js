const readline = require("readline");
const fs = require("fs/promises");
const callback = require("./writeAndReadObject.js")

function readLine() {
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

}


function consoleRead(question, fichero) {
    pregunta()
        .then((result) => {
            fichero.name = result;
            return pregunta(question);
        })
        .then((result) => {
            fichero.surname = result;
            return pregunta(question);
        })
        .then((result) => {
            fichero.age = result;
            return getJson(fichero, objetopersona);
        })
        .catch((err) => {
            console.error(err);
        });
}