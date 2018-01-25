FROM node:8.9.4
EXPOSE 8080

COPY index.js .
CMD node index.js