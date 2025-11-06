const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content type: ': 'text/plain'});

    res.end('\nHello World');

});

server.listen(PORT , 'localhost', () => {console.log(`server listening on http://localhost:${PORT}`)});