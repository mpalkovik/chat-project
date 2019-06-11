#!/bin/bash
REPO_DIR=$(pwd)
VERSION=$1

#start=$(jq ".scripts.start" package.json | tr -d "\"")
#end=$(sed 's/\-\-open //' <<< $start)
#jq --arg start "$start" --arg end "$end" '(.scripts | select(.start == $start).start) = "'"$end"'"' package.json

# build node docker image
if [ ! -z $VERSION ];then
   docker build $REPO_DIR -t chat-project_node:$VERSION
else
   docker build $REPO_DIR -t chat-project_node
fi

# create docker-compose .env file
sed -i "s/DOCKER_VERSION=[0-9]*/DOCKER_VERSION=$VERSION/" .env
sed -i "s/DOCKER_PORT_NODE=[0-9]*/DOCKER_PORT_NODE=$(( 12000 + $VERSION ))/" .env

# bring up docker-compose
docker-compose -p chat-project-v_$VERSION up -d

