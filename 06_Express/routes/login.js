var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let msg = 'Acceso no permitido';
    if (req.query.nombre && req.query.nombre === 'Fran') {

        msg = `Saludos ${req.query.nombre}`;
    }

    res.send(msg);
});

module.exports = router;