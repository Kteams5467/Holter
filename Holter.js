const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

if (req.url === '/' && req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    res.end('\nHello World');
}

if (req.url === '/about' && req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    res.end('\nCiao siamo Ibba e Zappia questa è la nostra pagina relativa al tuo Holter!! \n Il tuo Holter funziona grazie a noi.');
}

});

server.listen(PORT , 'localhost', () => {console.log(`server listening on http://localhost:${PORT}`)});