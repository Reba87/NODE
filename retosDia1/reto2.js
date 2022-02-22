let persona = {
    name: "Jhon",
    surname: "Smith",
    age: 23
}



let objtJson = JSON.stringify(persona)



let fs = require('fs');

fs.writeFile(`person.json`, objtJson, function(err) {
    if (err) throw err;
    console.log("saved!")
    fs.readFile(`person.json`, "utf8", function(err, data) {
        if (err) throw err;

        console.log(JSON.parse(data));
    })
});