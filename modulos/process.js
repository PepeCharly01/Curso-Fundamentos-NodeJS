process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Charlie, el proceso termino');
    setTimeout(() => {
        console.log('Esto nunca se va a ver');
    }, 0);
});

setTimeout(() => {
    console.log('Esto si se va a ver');
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});

 // functionQueNoExiste();

console.log('Si el error no se recoje, no sale');