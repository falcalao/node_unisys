const fs = require('fs');

const data1 = fs.readFileSync('prueba.txt', { encoding: 'utf-8' });

console.log(data1);
console.log('Lectura de ficheros');

let data2;

fs.readFile('prueba3.txt', { encoding: 'utf-8' }, (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    data2 = data;
    console.log(data);
});

console.log('Lectura de ficheros');