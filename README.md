# node-hello-server
A simple stateless HTTP server written in Node.js which returns a timestamp, 'Hello World' + a unique string.
This server can be used to check loadbalancing as every instance returns an own unique string.

## Requirements
* [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/) or [Docker](https://www.docker.com/) / [Kubernetes](https://kubernetes.io/)

## Source version

Clone
```
git clone https://github.com/giftkugel/node-hello-server.git
cd node-hello-server
```

Run the server
```
node index.js
```

## Docker image from [Docker Hub](https://hub.docker.com/r/giftkugel/node-hello/)

Start the container
```
docker run --name node-hello -d -p 8080:8080 giftkugel/node-hello:latest
```

## Running on [Kubernetes](https://kubernetes.io/) (e.g. bundled with [Docker Desktop](https://www.docker.com/products/docker-desktop))

Create deployment
```
kubectl create deployment hello --image=giftkugel/node-hello:latest
```

Expose the deployment
```
kubectl expose deployment hello --port=8080 --target-port=8080 --name=hello-service --type=LoadBalancer
```

## Usage

Default
```
curl http://localhost:8080
```

### Response

#### Plain text
```
2020-10-21T13:52:47.792Z] - Hello World          - request=5bf3b6dec71250b9, id=142a4a66, ip=::1, method=GET, node=v12.9.0, count=0000000003, path=/
```

#### Custom headers in response
```
Server: node-hello-server 142a4a66
Request-Id: 5bf3b6dec71250b9
Node-Version: v12.9.0
Count: 0000000003
Connection-Date: 2020-10-21T13:52:47.792Z
```

### Configuration

#### Wait for a reponse
You can set the `wait` query parameter to let the server wait an amount of time before the answer is send

Example: Wait 5 seconds
```
curl http://localhost:8080?wait=5000
```
