#!/bin/bash
REPO_DIR=$(pwd)
VERSION=$1

# check if .env file exists
if [ ! -f ".env" ];then
   echo "DOCKER_VERSION=0" > .env
   echo "DOCKER_PORT_NODE=11000" >> .env
elif [ -z $(cat .env | grep DOCKER_VERSION) ];then
   echo "" >> .env
   echo "DOCKER_VERSION=0" >> .env
elif [ -z $(cat .env | grep DOCKER_PORT_NODE) ];then
   echo "" >> .env
   echo "DOCKER_PORT_NODE=11000" >> .env
fi

# check $VERSION variable and create docker-compose .env file
if [ ! -z $VERSION ];then
   sed -i "s/DOCKER_VERSION=latest\|DOCKER_VERSION=[0-9]*/DOCKER_VERSION=$VERSION/" .env
   sed -i "s/DOCKER_PORT_NODE=[0-9]*/DOCKER_PORT_NODE=$(( 11000 + $VERSION ))/" .env
else
   VERSION="latest"
   sed -i "s/DOCKER_VERSION=latest\|DOCKER_VERSION=[0-9]*/DOCKER_VERSION=$VERSION/" .env
   sed -i "s/DOCKER_PORT_NODE=[0-9]*/DOCKER_PORT_NODE=11000/" .env
fi

# build node docker image
docker build $REPO_DIR -t chat-project_node:$VERSION

# bring up docker-compose
docker-compose -p chat-project-v_$VERSION up -d

