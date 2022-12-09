function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log(`Hola, ${nombre}`);
        miCallback(nombre);
    }, 2000)
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla..');
        callbackHablar();
    }, 2000)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 2000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
    })
    } else {
        adios(nombre, callback);
    }
}

// --
console.log('Iniciando un proceso...');
hola('Carlos', function (nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado');
    });
});

/*
de esta manera por cada funcion hablar tenias que poner la funcion.
hola('Carlos', function (nombre) {
    hablar(function() {
        hablar(function() {
            hablar(function() {
                adios(nombre, function() {
                    console.log('Terminando un proceso..');
                });
             });
        }); 
    });
});
*/