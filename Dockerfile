FROM node:lts
EXPOSE 8080

COPY index.js .
CMD node index.js
