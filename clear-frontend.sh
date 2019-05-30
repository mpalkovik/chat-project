#!/bin/bash
#ghprbPullId=$1
#VERSION=$1

### curl -s https://api.github.com/repos/garySiladi/chat-project/pulls?state=open | jq '.[] | "\(.number) \(.head.sha)"'

#OPEN_PR=${curl -u "mpalkovik" https://api.github.com/repos/Stephaaan/chat_backend/pulls?state=open | jq ".[].number"}
#CLOSED_PR=${curl -u "mpalkovik" https://api.github.com/repos/Stephaaan/chat_backend/pulls?state=closed | jq ".[].number"}
OPEN_PR="7"
CLOSED_PR="5 6"

echo -e "open: $OPEN_PR\nclosed: $CLOSED_PR"
# get open pr and running pr
# to run - open pr not running
# to kill - closed pr running

for pr in $CLOSED_PR
do
   docker ps | grep "chat-project_node:$pr" | tr -s ' ' | cut -d ' ' -f1
done
