 
console.log('Algo');
console.info('Algo');
console.error('Algo');
console.warn('Algo');
console.table(tabla);


var tabla = [
{
    a: 1,
    b: 'Z',
},
{
    a: 2,
    b: 'A',
}
]

console.group('conversacion');
console.log('Hola');
console.group('Hablar')
console.log('Bla Bla bla..');
console.log('Bla Bla bla..');
console.log('Bla Bla bla..');
console.groupEnd('Hablar')
console.log('Adios');
console.groupEnd('conversacion');
console.log('Otra funcion'); 

function funcion1() {
    console.group('funcion 1');
    console.log('Esto es parte de la funcion 1');
    console.log('ESto tambien');
    console.log('y por ultimo esto');
    funcion2();
    console.log('He vuelto a la funcion 1');
    console.groupEnd('funcion 1');
}

function funcion2() {
    console.group('funcion 2');
    console.log('Ahora estamos en la Funcion 2');
    console.groupEnd('funcion 2');
}

console.log('empezamos');
funcion1();

console.count('Veces:');
console.count('Veces:');
console.count('Veces:');
console.count('Veces:');
console.countReset('Veces:');
console.count('Veces:'); 