const express = require('express')

const app = express()

app.get(`/`, function(req, res) {
    console.log("Peticion recibida por el cliente");
    console.log("Request URL: " + req.url);
    console.log("Reques Method: " + req.method);
    console.log("Header request: " + req.headers.host)
    console.log("Reques user-agent: " + req.headers[`user-agent`])   
    res.send(JSON.stringify({ ok: true, message: `Recibido!` }))
})
app.get(`/bye`, function(req, res) {
    console.log("Peticion recibida por el cliente");
    console.log("Request URL: " + req.url);
    console.log("Reques Method: " + req.method);
    console.log("Header request: " + req.headers.host)
    console.log("Reques user-agent: " + req.headers[`user-agent`])
    res.send(JSON.stringify({ ok: true, message: `Adios!` }))
})

app.listen(5000)