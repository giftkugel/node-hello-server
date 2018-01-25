# node-hello-server
A simple stateless HTTP server written in Node.js which returns a timestamp, 'Hello World' + a unique string.
This server can be used to check loadbalancing as every instance returns an own unique string.

## Requirements
* [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/) or [Docker](https://www.docker.com/)

## Source version
```
git clone https://github.com/giftkugel/node-hello-server.git
cd node-hello-server
```

```
node index.js
```

## Docker image from [Docker Hub](https://hub.docker.com/r/giftkugel/node-hello/)

Pull the image
```
docker pull giftkugel/node-hello:v3
```

Start the container
```
docker run -d -p 8080:8080 giftkugel/node-hello:v3
```

## Usage
```
curl http://localhost:8080
```

### Example response
```
2018-01-25T11:03:14.809Z] Hello World with id 69d53a63d8af71d30e2ba3c02da5c2f5 at /
```
