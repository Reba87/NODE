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

let profesional=""
 


app.get("/profesional",
function(request, response)
{   
    
    let message;
    if(profesional !== ""){
        message = profesional;
    }
    
    else(message ={ error:true, codigo : 200, mensaje : "El profesional no existe"} )
    
    response.send(message)
})
app.post(`/profesional`,
function (request, response){
    
    
    let message;

    if(profesional ===""){
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

        
        message = {error:false, codigo:200, mensaje:"Nuevo profesional creado",
         resultado:profesional}
        }else 
        message = {error:false, codigo:200, mensaje:"Ya existe ese profesional",
                    resultado:""}
        response.send(message);
        
})
app.put(`/profesional`,
function(request, response) {
    let message;
    if(profesional != "") {
        (
                            profesional.name = request.body.nombre,
                            profesional.age= request.body.edad,
                            profesional.weight= request.body.peso,
                            profesional.height= request.body.altura,
                            profesional.hairColor= request.body.colorPelo,
                            profesional.eyeColor= request.body.colorOjos,
                            profesional.race = request.body.raza,
                            profesional.isRetired = request.body.retirado,
                            profesional.nationality = request.body.nacionalidad,
                            profesional.oscarNumber= request.body.numbOscar,
                            profesional.profession = request.body.profesion
        )
        message = {error:false, codigo:200, mensaje:"El profesional ha sido modificado",
         resultado:profesional}
    }else 
        message = {error:false, codigo:200, mensaje:"No se ha podido modificar el profesional",
                    resultado:null}
        response.send(message);
})
app.delete(`/profesional`,
function(request, response){
    let message;
    if(profesional !=""){
        profesional = "";
        message = {error:false, codigo:200, mensaje:"El profesional ha sido borrado con exito"}
    }else
    message = {error:false, codigo:200, mensaje:"El usuario no existe",
                    resultado:profesional}
        response.send(message);
})

app.use(function(request, response,next){
    message = {error:false, codigo:404, mensaje:"URL no encontrada"}
    res.status(404).send(message)
})

app.listen(7000)
