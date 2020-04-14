let x;
const ob = {};
ob.name = 'Pepe';

function suma(a = 0, b = 0) {
    return a + b;
}

console.log(suma(3, 8));

const resta = function(a = 0, b = 0) {
    return a - b;
};

console.log(resta(3, 8));

// ES6
/* const prod = (a = 1, b = 1) => {
    return a * b;
}; */

const prod = (a = 1, b = 1) => a * b;
console.log(prod(3, 8));

const cuad = a => a * a;
console.log(cuad(3));

setTimeout(() => {
    console.log(suma(3, 2));
}, 1000);