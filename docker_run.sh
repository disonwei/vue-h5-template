#!/bin/bash

set -e

DIR="$(cd "$( dirname "${BASE_SOURCE[0]}" )" && pwd)"
DOCKER_FILE=$DIR/docker/dockerfile

IMAGE_NAME="ppapp"
AUTHOR="dison"
IMAGE_VERSION=$(node -p -e "require('./package.json').version")
GIT_COMMIT_HASH=$(git rev-parse --short=7 HEAD | sed 's/[[:blank:]]//g')
BRANCH=${1:-$(git branch --show-current)}

IMAGE_VERSION=${IMAGE_VERSION}.${BRANCH}.${GIT_COMMIT_HASH}


echo start build image ...


echo $IMAGE_VERSION > .version
docker build ${DIR} -f ${DOCKER_FILE} -t ${AUTHOR}/${IMAGE_NAME}:${IMAGE_VERSION} --force-rm=true


echo ${REGISTRY}/${IMAGE_NAME}:${IMAGE_VERSION}

echo ::set-output name=dockerImageName::"${REGISTRY}/${IMAGE_NAME}:${IMAGE_VERSION}"
echo ::set-output name=dockerImageVersion::$IMAGE_VERSION