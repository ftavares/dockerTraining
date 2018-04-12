#!/bin/bash  

docker rm -f webapi
docker rmi nodeapi
docker build -t nodeapi .
docker run -d --name webapi -p 5001:3000 nodeapi