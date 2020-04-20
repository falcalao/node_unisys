//Cargamos el módulo http
const http = require('http');
const fs = require('fs');

const port = 3003;

//Creamos el servidor Web

const server = http.createServer((req, res) => {

    let file = '';

    switch (req.url) {
        case '/':
            file = 'index.html';
            break;
        case '/about':
            file = 'about.html';
            break;
        default:
            res.writeHead(404, { 'Content-type': 'text/html' });
            res.end('<h1>Error 404</h1>');
            return;
    }

    fs.readFile(file, 'utf-8', (err, data) => {

        if (err) {
            res.writeHead(500, { 'Content-type': 'text/html' });
            res.end(err.message);
            return;
        }

        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });

});

//Arrancamos el servidor 
server.listen(port);
console.log('Escuchando en el puerto', port);