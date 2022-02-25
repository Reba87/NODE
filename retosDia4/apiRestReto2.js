const express = require('express');
const res = require('express/lib/response');
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());




class profess {

    // Declarando constructor y sus atributos //
    constructor (name, age, weight, height, hairColor, eyeColor, race, isRetired,
                 nationality, oscarNumber, profession)
                 { 
                     this.name = name;
                     this.age = age;
                     this.weight = weight;
                     this.height = height;
                     this.hairColor = hairColor;
                     this.eyeColor = eyeColor;
                     this.race = race;
                     this. isRetired = isRetired;
                     this.nationality = nationality;
                     this.oscarNumber = oscarNumber;
                     this.profession = profession;
                     
                 }

}

let profesionales=[]
 


app.get("/profesionales",
function(request, response)
{   
    
    let message;
    if(profesionales.length > 0){
        message = profesionales;
    }
    
    else(message ={ error:true, codigo : 200, mensaje : "El profesional no existe"} )
    
    response.send(message)
})


app.post(`/profesionales`,
function (request, response){
    
    let profesional
    let message;

    
         profesional = new profess (  
                            name = request.body.nombre,
                            age= request.body.edad,
                            weight= request.body.peso,
                            height= request.body.altura,
                            hairColor= request.body.colorPelo,
                            eyeColor= request.body.colorOjos,
                            race = request.body.raza,
                            isRetired = request.body.retirado,
                            nationality = request.body.nacionalidad,
                            oscarNumber= request.body.numbOscar,
                            profession = request.body.profesion)
        
        

        profesionales.push(profesional)
       
        message = {error:false, codigo:200, mensaje:"Nuevo profesional creado",
        resultado:profesionales}
        response.send(message);
        
})
app.get("/profesionales/:id",
function(request, response)
{   let id = request.params.id;
    let resultado = profesionales[request.params.id]
    let message;
    if(profesionales.length > 0 && (id < profesionales.length) )
    {
        message = resultado;
    }
    
    else(message ={ error:true, codigo : 200, mensaje : "El profesional no existe"} )
    
    response.send(message)
})

app.put(`/profesionales/:id`,
function(request, response) {
    let id = request.params.id;
    let resultado = profesionales[request.params.id]
    let message;
    if(profesionales.length > 0 && (id < profesionales.length)) {
        (
                            profesionales[id].name = request.body.nombre,
                            profesionales[id].age= request.body.edad,
                            profesionales[id].weight= request.body.peso,
                            profesionales[id].height= request.body.altura,
                            profesionales[id].hairColor= request.body.colorPelo,
                            profesionales[id].eyeColor= request.body.colorOjos,
                            profesionales[id].race = request.body.raza,
                            profesionales[id].isRetired = request.body.retirado,
                            profesionales[id].nationality = request.body.nacionalidad,
                            profesionales[id].oscarNumber= request.body.numbOscar,
                            profesionales[id].profession = request.body.profesion
        )
        message = {error:false, codigo:200, mensaje:"El profesional ha sido modificado",
         resultado}
    }else 
        message = {error:false, codigo:200, mensaje:"El profesional que quiere modificar no existe",
                    resultado:null}
        response.send(message);
})
app.delete(`/profesionales/:id`,
function(request, response){
    let id = request.params.id;
    let resultado = profesionales[request.params.id]
    let message;
    if(profesionales.length > 0 && (id < profesionales.length)){
        profesionales[id] = "";
        message = {error:false, codigo:200, mensaje:"El profesional ha sido borrado con exito",profesionales}
    }else
    message = {error:false, codigo:200, mensaje:"El usuario no existe",
                    resultado}
        response.send(message);
})

app.use(function(request, response,next){
    message = {error:false, codigo:404, mensaje:"URL no encontrada"}
    res.status(404).send(message)
})

app.listen(7020)
