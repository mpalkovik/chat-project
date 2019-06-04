#!/bin/bash
OPEN_PR=$(curl -s https://api.github.com/repos/mpalkovik/chat-project/pulls?state=open | jq ".[].number")
CLOSED_PR=$(curl -s https://api.github.com/repos/mpalkovik/chat-project/pulls?state=closed | jq ".[].number")

for pr in $CLOSED_PR
do
   to_clean=$(docker ps | grep -wo "chat-project_node:$pr" | cut -d ':' -f2)
   if [ "$pr" == "$to_clean" ];then
      echo "cleaning chat-project-v_$to_clean"
      docker-compose -p chat-project-v_$to_clean down
#   else
#      echo "nothing to clean"
   fi
done

