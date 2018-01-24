#!/bin/bash

# Build the "build-image"
docker build -t yitsushi/old-build:build -f ./Dockerfile.build ..

# Create a temporary container
docker create --name temp_container yitsushi/old-build:build

# Extract build artifacts
docker cp temp_container:/application/public ./build-artifact

# delete the temporary container
docker rm -f temp_container

# Build the final image
docker build --no-cache -t yitsushi/old-build:latest -f ./Dockerfile .

# Delete the temporary build-artifact directory
rm -rf ./build-artifact
