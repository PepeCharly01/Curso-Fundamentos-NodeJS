const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }

    /*
    res.writeHead(201, { 'Content-Type': 'text/plain' })

    // EScribir respuesta al usuario
    res.write('hola ya se usar HTTP de NoteJS')

    res.end(); */
}

console.log("Escuchando en el puerto 3000");
