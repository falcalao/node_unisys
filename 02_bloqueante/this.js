//'use strict';

const ob = {
    nombre: 'Pepe',
    algo() { //algo: function(){}
        console.log(this);
    }
}

ob.algo();

const fuera = ob.algo;

fuera();

const nuevo = new fuera();