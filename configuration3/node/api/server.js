var http = require('http');

function startServer(port) {
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Nice to meet you at node:' + port);
    }).listen(port);
}

startServer(3000);