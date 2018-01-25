const HTTP = require('http');
const CRYPTO = require("crypto");

const HTTP_PORT = 8080;
const UNIQUE_ID = CRYPTO.randomBytes(16).toString("hex");

HTTP.createServer(function (req, res) {
    const CURRENT_DATE = new Date();
    console.log(CURRENT_DATE.toISOString(), '-', 'Incoimg request:', req.method, req.url);
    res.write('[' + CURRENT_DATE.toISOString()+ '] Hello World with id ' + UNIQUE_ID + ' at ' + req.url + '\n');
    res.end();
}).on('error', (error) => {
    console.error(error);
}).on('listening', () => {
    console.log('HTTP Server is listening now on port', HTTP_PORT);
}).listen(HTTP_PORT);

