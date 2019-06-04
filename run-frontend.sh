#!/bin/bash
REPO_DIR=$(pwd)
#VERSION=${ghprbPullId}
VERSION=$1

# build node docker image
if [ ! -z $VERSION ];then
#if [ ! -z ${ghprbPullId} ];then
   docker build $REPO_DIR -t chat-project_node:$VERSION
#   docker build $REPO_DIR -t chat-project_node:${ghprbPullId}
else
   docker build $REPO_DIR -t chat-project_node
fi
# create docker-compose .env file
echo "DOCKER_VERSION=$VERSION" > $REPO_DIR/.env
echo "DOCKER_PORT_NODE=$(( 12000 + $VERSION ))" >> $REPO_DIR/.env

# bring up docker-compose
docker-compose -p chat-project-v_$VERSION up -d

