FROM node:wheezy

RUN npm i -g nodemon

RUN npm uninstall -g phantomjs

WORKDIR /dev/app

EXPOSE 8888

CMD rm -rf node_modules && npm i && nodemon -L server.js
