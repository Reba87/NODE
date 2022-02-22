let fs = require('fs');

function writeAndRead(fichero, objetopersona) {

    fs.writeFile(fichero, JSON.stringify(objetopersona), function(err, data) {
        if (err) throw err;
        else {
            fs.readFile(fichero, "utf8", function(err, data) {
                if (err) throw err;
                else {
                    console.log(JSON.parse(data));
                }

            })
        }
    });



}

module.exports = { writeAndRead }