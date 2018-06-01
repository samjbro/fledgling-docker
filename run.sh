#!/usr/bin/env bash

COMPOSE="docker-compose -f ./docker/docker-compose.dev.yml"

if [ $# -gt 0 ];then
  $COMPOSE "$@"
else
  $COMPOSE ps
fi