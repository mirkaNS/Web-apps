const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/JSON');

    data = {
        name: "mira",
        surname: "glisic"
    }

    res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});
