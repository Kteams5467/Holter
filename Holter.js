const http = require('http');
const fs = require('fs').promises;
const PORT = 3000;

const server =  http.createServer(async (req, res) => {

if (req.url === '/' && req.method === 'GET'){
    res.statusCode = 200;
    res.end('\nHello World')
} else if (req.url === '/about' && req.method === 'GET'){
    res.statusCode = 200;
    res.end('\nCiao siamo Ibba e Zappia questa è la nostra pagina relativa al tuo Holter!! \n Il tuo Holter funziona grazie a noi!');
} else if (req.url === '/dashboard' && req.method === 'GET'){
    res.statusCode = 200;
    res.end('\nciao');
} else if (req.url === '/paziente/elenco' && req.method === 'GET'){
    let data = await fs.readFile('Pazienti.json','utf8');
    let pazienti = JSON.parse(data);
    res.statusCode = 200;
    res.end(pazienti);
}else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }

/*if (req.url === '/paziente/***' && req.method === 'GET'){
    res.statusCode = 200;
    res.end();
}*/



});

server.listen(PORT , 'localhost', () => {console.log(`server listening on http://localhost:${PORT}`)});