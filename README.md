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
docker pull giftkugel/node-hello:latest
```

Start the container
```
docker run -d -p 8080:8080 giftkugel/node-hello:latest
```

## Usage
```
curl http://localhost:8080
```

### Example response
```
[2020-10-19T15:27:18.770Z] Hello World: id=3a5a8f84, path=/test, node=v12.16.1, count=7
```
