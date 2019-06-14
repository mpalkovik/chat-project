From node:alpine

WORKDIR /chat-project

COPY . /chat-project

RUN apk --update --no-cache \
        add \
        python \
        make \
        g++ \
        jq && \
    start=$(jq ".scripts.start" package.json | tr -d "\"") && \
    end=$(echo "$start" | sed 's/\-\-open //') && \
    jq --arg start "$start" --arg end "$end" '(.scripts | select(.start == $start).start) = "'"$end"'"' package.json > package.json.tmp && \
    mv package.json.tmp package.json && \
    npm install && \
    npm run-script build

EXPOSE 1234
ENTRYPOINT ["npm", "run", "start"]
