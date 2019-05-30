#!/bin/bash
#REPO_DIR=/opt/chat-project
REPO_DIR=.

############################
#      FOR TEST ONLY
ghprbPullId=$1
############################


#VERSION=${ghprbPullId}
#HOME=$(pwd)


# build node docker image
#if [ ! -z $VERSION ];then
if [ ! -z ${ghprbPullId} ];then
   docker build $REPO_DIR -t chat-project_node:${ghprbPullId}
else
   docker build $REPO_DIR -t chat-project_node
fi
# create docker-compose .env file
echo "VERSION=${ghprbPullId}" > $REPO_DIR/.env
echo "PORT_NODE=$(( 12000 + ${ghprbPullId} ))" >> $REPO_DIR/.env

# bring up docker-compose
docker-compose up -d

