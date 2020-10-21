const http = require('http');
const crypto = require("crypto");

const httpPort = 8080;
const uniqueId = crypto.randomBytes(4).toString("hex");

let count = 0;

const createOutput = (text, req, currentDate, currentCount, requestId) => {
    return `${currentDate} - ${text.padEnd(20)} - request=${requestId}, id=${uniqueId}, ip=${req.connection.remoteAddress}, method=${req.method}, node=${process.version}, count=${currentCount}, path=${req.url}`;
}

const writeResponse = (req, res, currentDate, currentDateString, currentCount, requestId) => {
    const responseOutput = createOutput('Hello World', req, currentDate, currentCount, requestId) + "\n";
    const logOutput = createOutput('Response sent', req, currentDate, currentCount, requestId);

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Server', `node-hello-server ${uniqueId}`);
    res.setHeader('Request-Id', requestId);
    res.setHeader('Node-Version', process.version);
    res.setHeader('Count', currentCount);
    res.setHeader('Connection-Date', currentDateString);
    res.write(responseOutput);
    res.end();
    console.log(logOutput);
}

const handleRequest = (req, res) => {
    const requestId = crypto.randomBytes(8).toString("hex");
    const currentCount = `${count++}`.padStart(10, '0');
    const currentDateString = new Date().toISOString();
    const currentDate = `[${currentDateString}]`;
    const requestUrl = new URL(req.url, `http://${req.headers.host}`);
    const waitTime = requestUrl.searchParams.get('wait');
    const logOutput = createOutput('Incoimg request', req, currentDate, currentCount, requestId);

    console.log(logOutput);

    const respond = () => writeResponse(req, res, currentDate, currentDateString, currentCount, requestId);

    if (waitTime === null) {
        respond();
    } else {
        setTimeout(respond, waitTime);
    }
}

http.createServer(handleRequest)
.on('error', (error) => {
    console.error(error);
})
.on('listening', () => {
    console.log(`HTTP Server is listening now on port=${httpPort} with id=${uniqueId} and node=${process.version}`);
})
.listen(httpPort);

