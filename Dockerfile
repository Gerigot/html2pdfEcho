FROM node:wheezy

RUN npm i -g nodemon

RUN npm uninstall -g phantomjs

WORKDIR /dev/app

CMD rm -rf node_modules && npm i && nodemon -L server.js