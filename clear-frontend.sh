#!/bin/bash
# get PR requests
#OPEN_PR=$(curl -s https://api.github.com/repos/mpalkovik/chat-project/pulls?state=open | jq ".[].number")
CLOSED_PR=$(curl -s https://api.github.com/repos/mpalkovik/chat-project/pulls?state=closed | jq ".[].number")

# check for running closed PR requests
for pr in $CLOSED_PR
do
   to_clean=$(docker ps | grep -wo "chat-project_node:$pr" | cut -d ':' -f2)
# clean closed PR requests
   if [ "$pr" == "$to_clean" ];then
      echo "cleaning chat-project-v_$to_clean"
      docker-compose -p chat-project-v_$to_clean down
#   else
#      echo "nothing to clean"
   fi
done

# clean latest requests
if [ ! -z $(docker ps | grep -wo "chat-project_node:latest") ];then
   echo "cleaning chat-project-v_latest"
   docker-compose -p chat-project-v_latest down
fi

