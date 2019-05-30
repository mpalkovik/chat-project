From node:latest

WORKDIR /chat-project

COPY . /chat-project

RUN  sed -i 's/\-\-open //' package.json && npm install && \
    npm run-script build

EXPOSE 1234
ENTRYPOINT ["npm", "run", "start"]
