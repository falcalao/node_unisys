setTimeout(() => { console.log('Linea 1'); }, 0);
setTimeout(() => { console.log('Linea 2'); }, 2000);
console.log('Linea 3');
setTimeout(() => { console.log('Linea 4'); }, 2000);
console.log('Linea 5');
console.log('Linea 6');

/* 
Linea 3
Linea 5
Linea 6
Linea 1 //BUCLE DE EVENTOS
Linea 2
Linea 4 */