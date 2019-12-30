#!/bin/bash

echo "COPY .dockerignore file"
cp ../docker-dev/.dockerignore ../

printf "\n"
docker-compose -f ../docker-dev/docker-compose.yml -p bubnov stop server-api
docker-compose -f ../docker-dev/docker-compose.yml -p bubnov build server-api &&
docker-compose -f ../docker-dev/docker-compose.yml -p bubnov up server-api

read -p "press ENTER"
