async function hola(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log(`Hola, ${nombre}`);
            resolve(nombre);
        }, 1000)
    });
}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla..');
           resolve(nombre);
           reject('Hay un error');
        }, 1000)
    });
    
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log(`Adios, ${nombre}`);
            resolve();
        }, 1500);
    });
}

async function main() {
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminando el proceso');
}

console.log('Empezamos el proceso..');
main();