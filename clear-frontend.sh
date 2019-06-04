#!/bin/bash
#ghprbPullId=$1
#VERSION=$1

### curl -s https://api.github.com/repos/garySiladi/chat-project/pulls?state=open | jq '.[] | "\(.number) \(.head.sha)"'

OPEN_PR=$(curl -s https://api.github.com/repos/mpalkovik/chat-project/pulls?state=open | jq ".[].number")
CLOSED_PR=$(curl -s https://api.github.com/repos/mpalkovik/chat-project/pulls?state=closed | jq ".[].number")
#OPEN_PR="11"
#CLOSED_PR="9"
#CLOSED_PR="9 10"

#echo -e "open: $OPEN_PR\nclosed: $CLOSED_PR"
# get open pr and running pr
# to run - open pr not running
# to kill - closed pr running

for pr in $CLOSED_PR
do
#   to_clean=$(docker ps | grep "chat-project_node:$pr" | tr -s ' ' | cut -d ' ' -f2 | cut -d ':' -f2)
   to_clean=$(docker ps | grep -wo "chat-project_node:$pr" | cut -d ':' -f2)
#   echo $to_clean
   if [ "$pr" == "$to_clean" ];then
      echo "cleaning chat-project-v_$to_clean"
      docker-compose -p chat-project-v_$to_clean down
#   else
#      echo "nothing to clean"
   fi
done

