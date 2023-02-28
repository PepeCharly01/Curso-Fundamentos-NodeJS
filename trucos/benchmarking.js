console.time('Todo');
let suma = 0;
console.time('bucle');
for (let i = 0; i < 200000000; i ++) {
    suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle 2');
for (let j = 0; j < 2000000000; j ++) {
    suma += 1;
}
console.timeEnd('bucle 2');

console.time('asincrono');
console.log('Empieza el proceso async');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });

console.timeEnd('Todo');

function asincrona() {
    return new Promise( (resolve) => {
        setTimeout(function () {
            console.log('Termina el proceso asíncrono');
            resolve();
        });
    });
}