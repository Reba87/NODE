const express = require("express");
const res = require("express/lib/response");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

class profess {
    // Declarando constructor y sus atributos //
    constructor(
        name,
        age,
        weight,
        height,
        hairColor,
        eyeColor,
        isRetired,
        nationality,
        oscarNumber
       
    ) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
    }
}

let profesionales = [];

app.get("/profesionales", function (request, response) {
    let message;
    if (profesionales.length > 0) {
        message = profesionales;
    } else message = {
        error: true,
        codigo: 200,
        mensaje: "El profesional no existe"
    };

    response.send(message);
});

app.post(`/profesionales`, function (request, response) {
    let profesional;
    let message;

    profesional = new profess(
        request.body.name,
        request.body.age,
        request.body.weight,
        request.body.height,
        request.body.hairColor,
        request.body.eyeColor,
        request.body.isRetired,
        request.body.nationality,
        request.body.oscarNumber
    );

    profesionales.push(profesional);

    message = {
        error: false,
        codigo: 200,
        mensaje: "Nuevo profesional creado",
        resultado: profesionales,
    };
    response.send(message);
});
app.get("/profesionales/:id", function (request, response) {
    let id = request.params.id;
    let resultado = profesionales[request.params.id];
    let message;
    if (profesionales.length > 0 && id < profesionales.length) {
        message = [resultado];
    } else message = {
        error: true,
        codigo: 200,
        mensaje: "El profesional no existe"
    };

    response.send(message);
});

app.put(`/profesionales/:id`, function (request, response) {
    let id = request.params.id;
    let resultado = profesionales[request.params.id];
    let message;
    if (profesionales.length > 0 && id < profesionales.length) {
       if(request.body.name != "")
       {
        (profesionales[id].name = request.body.name)
       }
       if(request.body.age != "")
       {
        (profesionales[id].age = request.body.age)
       }       
       if(request.body.weight != "")
       {
        (profesionales[id].weight = request.body.weight)
       }
       if(request.body.height != "")
       {
        (profesionales[id].height = request.body.height)
       }
       if(request.body.hairColor != "")
       {
        (profesionales[id].hairColor = request.body.hairColor)
       }     
       if(request.body.eyeColor != "")
       {
        (profesionales[id].eyeColor = request.body.eyeColor)
       }     
       if(request.body.isRetired != "")
       {
        (profesionales[id].isRetired = request.body.isRetired)
       }    
       if(request.body.nationality != "")
       {
        (profesionales[id].nationality = request.body.nationality)
       } 
       if(request.body.oscarNumber!= "")
       {
        (profesionales[id].oscarNumber = request.body.oscarNumber)
       } 
        
        message = resultado;

    } else message = {
        error: false,
        codigo: 200,
        mensaje: "El profesional que quiere modificar no existe",
        resultado: null
    };
    response.send(message);
});
app.delete(`/profesionales/:id`, function (request, response) {
    let id = request.params.id;
    let resultado = profesionales[request.params.id];
    let message;
    if (profesionales.length > 0 && id < profesionales.length) {
        profesionales.splice(id, 1);
        message = {
            error: false,
            codigo: 200,
            mensaje: "El profesional ha sido borrado con exito",
            profesionales,
        };
    } else message = {
        error: false,
        codigo: 200,
        mensaje: "El usuario no existe",
        resultado
    };
    response.send(message);
});

app.use(function (request, response, next) {
    message = {
        error: false,
        codigo: 404,
        mensaje: "URL no encontrada"
    };
    res.status(404).send(message);
});

app.listen(8000);