//Cargamos el módulo http
const http = require('http');
const port = 3001;

//Creamos el servidor Web

const server = http.createServer((req, res) => {
    /* console.log(req); */
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1>Hola Unisys!</h1>');

});

//Arrancamos el servidor 
server.listen(port);
console.log('Escuchando en el puerto', port);