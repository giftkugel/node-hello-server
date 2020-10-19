const HTTP = require('http');
const CRYPTO = require("crypto");

const HTTP_PORT = 8080;
const UNIQUE_ID = CRYPTO.randomBytes(4).toString("hex");

let count = 0;

HTTP.createServer((req, res) => {
    const CURRENT_DATE = new Date();
    count++;
    console.log(CURRENT_DATE.toISOString(), '-', 'Incoimg request:', req.method, req.url);
    res.write('[' + CURRENT_DATE.toISOString()+ '] Hello World: id=' + UNIQUE_ID + ', path=' + req.url + ', node=' + process.version + ', count=' + count + '\n');
    res.end();
}).on('error', (error) => {
    console.error(error);
}).on('listening', () => {
    console.log('HTTP Server is listening now on port=%d with id=%s and node=%s', HTTP_PORT, UNIQUE_ID, process.version);
}).listen(HTTP_PORT);

