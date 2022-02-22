const http = require('http');

const server = http.createServer(function(request, response) {
    console.log("Request recived from client");
    console.log("Header request: " + request.headers.host)
    console.log("Request Method: " + request.method)
    console.log("Request URL: " + request.url)
    console.log("Respons Status code: " + response.statusCode)
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello from server!");
    response.end();
})

server.listen(3000);


/* 


 LOS METODOS SON EXCLUSIVOS DE LAS REQUEST 
Los metodos(method) mas usados y habituales son los siguientes: 
- "GET": Para obtener informacion del servidor, cuando el cliente hace
una peticion, EL METODO GET NUNCA TIENE BODY.
- "POST": Para añadir informacion, ejemplo cuando creamos un usuario, cuando rellenamos un formulario, etc. 
- "PUT": Para realizar algun cambio en la informacion que tenemos, ejemplo cuando cambiamos una contraseña,
cuando cambiamos una foto de perfil, etc.
- "DELETE": Para eliminar datos, ejem borrar el perfil o cuenta de un usuario 
*/