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