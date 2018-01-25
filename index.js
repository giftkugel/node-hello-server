const HTTP = require('http');
const CRYPTO = require("crypto");

const HTTP_PORT = 8080;
const UNIQUE_ID = CRYPTO.randomBytes(16).toString("hex");

HTTP.createServer(function (req, res) {
    console.log('Incoimg request:', req.method, req.url);
    res.write('Hello World with id ' + UNIQUE_ID + ' at ' + req.url + '\n');
    res.end();
}).listen(HTTP_PORT);

console.log('HTTP Server is listening on port', HTTP_PORT);