FROM docker.io/node:latest

EXPOSE 3000 3002

RUN mkdir -p /opt/app
COPY . /opt/app
RUN cd /opt/app && npm install

WORKDIR /opt/app
ENTRYPOINT ["node","index.js"]
