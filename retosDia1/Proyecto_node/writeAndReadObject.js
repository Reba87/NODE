let fs = require('fs');

function writeAndRead(fichero, objetopersona, callback) {

    fs.writeFile(fichero, JSON.stringify(objetopersona), callback, function(err, dato) {
        if (err) throw err;

    });
    callback(JSON.parse(dato));

    function callback() {
        fs.readFile(`dataPerson.json`, "utf8", function(err, data) {
            if (err) throw err;
            console.log(data);
        })
    }

}



export { writeAndRead }