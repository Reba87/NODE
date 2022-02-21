const fs = require('fs/promises');

function ReadAndWrite(fichero, objetopersona) {
    fs.writeFile(fichero, JSON.stringify(objetopersona))
        .then(() => {
            return fs.readFile(objetopersona, "utf8")
        })
        .then(data => {
            console.log(JSON.parse(data));
        })
        .catch(err => {
            console.log(err);
        })
}

export { ReadAndWrite }