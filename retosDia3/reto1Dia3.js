const http = require('http');
const server = http.createServer(function(request, response) {
    console.log("Peticion recibida por el cliente");
    console.log("Request URL: " + request.url);
    console.log("Reques Method: " + request.method);
    console.log("Header request: " + request.headers.host)
    console.log("Reques user-agent: " + request.headers[`user-agent`])
    console.log("Reques content-length: " + request.headers[`content-length`]);  
    console.log("Respons Status code: " + response.statusCode) 
    response.writeHead(200, { "Content-Type": "text/plain"});
    if (request.url === `/`) {
        response.write(JSON.stringify({ ok: true, message: `Recibido!` }))
    } else if (request.url === `/bye`) {
        response.write(JSON.stringify({ ok: true, message: `Adios!` }))
    }

    response.end();

})
server.listen(4000)
