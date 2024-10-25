FROM node:lts-alpine
EXPOSE 3000
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY ./contact-form/package.json .
RUN npm install
COPY ./contact-form .
CMD ["npm", "run", "start"]