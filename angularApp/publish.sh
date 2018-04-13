#!/bin/bash  

docker rm -f apptest
docker rmi angularapp
docker build -t angularapp .
docker run -d --name apptest -p 5002:80 angularapp