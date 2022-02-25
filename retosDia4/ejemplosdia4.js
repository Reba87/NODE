/* express y API REST 
    Los middleware se denominan en el codigo de server con la palabra USE 
*/ 

const express = require('express');
const app = express();

app.use(function (req, res, next){
    console.log("hola desde el middleware global");
    next();
});
app.use(`/ruta`, function (req, res, next){
    console.log("hola desde el middleware global de /ruta ");
    next();
});
app.get(`/ruta/a`, function (req, res,next){
    console.log("Hola desde el middleware de /ruta/a")
    next();
},
function(request,response){
    response.send("Hola desde /ruta/a")
})  

app.listen(6000)


//////////////////////////////////////////////
/* Creacion de una api rest 
TODAS LAS PIS LLEVAN UNA DOCUMENTACION QUE LE INDICA AL USUARIO LO QUE SOLICITA
EN CASO DE SER UN JSON LOS DATOS QUE NECESITA PARA PODER CREAR EN ESTE EJEMPLO
EL JSON PERSONA (NOMNRE Y APELLIDO)

*/ 

app.use(express.urlencoded({extended: false}));
app.use(express.json());

let usuario = null; //{nombre: "Rafa", apellidos : "Bravo Aponte "}

app.get("/",
function(request,response){
    let respuesta = { error:true, codigo : 200, mensaje : "punto de inicio"}
    response.send(respuesta);
})

app.get("/usuario",
function(request, response)
{
    let respuesta;
    if(usuario != null){
        respuesta = usuario;
    }
    
    else(respuesta ={ error:true, codigo : 200, mensaje : "El usuario no existe"} )
    
    response.send(respuesta)
})
app.post("/usuario",
function(request, response) {
    let respuesta;
    if(usuario ===null){
        usuario = {nombre: request.body.nombre1,
                   apellidos: request.body.apellido1}
    respuesta = {error: false, codigo: 200,
                mensaje: "Usuario creado", resultado: usuario}
    } else
    respuesta = { error: true, codigo: 200, mensaje: "Usuario ya existe", 
                resultado: null}

    response.send(respuesta);
})

app.put("/usuario",
function (request, response){

    let respuesta;
    if (usuario != null) {
        usuario.nombre = request.body.nombre1;
        usuario.apellidos = request.body.apellido1;
        respuesta = {error: false, codigo: 200,
                    mensaje: "Usuario actualizado", resultado: usuario}
                    
    } else 
        respuesta = { error:true, codigo: 200,
                    mensaje:"El usuario ya existe", resultado:usuario}
                    response.send(respuesta);
})










app.listen(8000)