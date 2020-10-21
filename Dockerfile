FROM node:lts-slim

EXPOSE 8080

COPY index.js .
CMD node index.js
