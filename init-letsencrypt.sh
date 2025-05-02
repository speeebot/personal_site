#!/bin/bash

# Create necessary directories
mkdir -p certs
mkdir -p letsencrypt
mkdir -p www

# Start the web server first
docker-compose up -d web

# Wait for the web server to be ready
echo "Waiting for web server to be ready..."
sleep 10

# Run certbot to get initial certificates
docker-compose run --rm certbot

# Restart the web server to pick up the new certificates
docker-compose restart web 