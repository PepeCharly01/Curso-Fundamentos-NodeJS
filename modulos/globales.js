
i = 0;
let intervalo = setInterval(function() {
    console.log('Hola');
    i++;
    if (i === 3) {
        clearInterval(intervalo);
    }
}, 1500) 

setImmediate(function() {
    console.log('Hola');
});

globalThis.miVariable = 'elValor';

console.log(miVariable);