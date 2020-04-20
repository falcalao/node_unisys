const express = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.send('Hola Mundo Express!');
});


app.get('/user', (req, res) => {
    let user = req.param('name') ? req.param('name') : ' user';
    res.send(`Hola ${user}`);
});

app.get('/user2', (req, res) => {
    let user = req.query.name ? req.query.name : ' user';
    res.send(`Hola ${user}`);
});

app.get('*', (req, res) => {
    res.send('Aqui me quedo');
});

app.listen(port, () => {
    console.log('Escuhando en el puerto ', port);
});