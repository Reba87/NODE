function writeAndRead() {

    let fs = require('fs');

    fs.writeFile(`dataPerson.json`, dataPerson, function(err) {
        if (err) throw err;

    });



    fs.readFile(`dataPerson.json`, "utf8", function(err, data) {
        if (err) throw err;
        console.log(data);
    })
}

export { writeAndRead }