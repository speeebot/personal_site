#!/bin/bash

# Create necessary directories
mkdir -p certs
mkdir -p letsencrypt
mkdir -p www

# Start the web server first
echo "Starting web server..."
docker-compose up -d web

# Wait for the web server to be ready
echo "Waiting for web server to be ready..."
sleep 10

# Verify the web server is responding
echo "Verifying web server is accessible..."
if ! curl -s -o /dev/null -w "%{http_code}" http://localhost:80 > /dev/null; then
    echo "Error: Web server is not accessible on port 80"
    exit 1
fi

# Create the webroot directory and set proper permissions
echo "Setting up webroot directory..."
docker-compose exec web mkdir -p /var/www/certbot
docker-compose exec web chown -R nginx:nginx /var/www/certbot
docker-compose exec web chmod -R 755 /var/www/certbot

# Run certbot to get initial certificates
echo "Running certbot..."
docker-compose run --rm certbot

# Verify certificates were created
if [ ! -f "./certs/shawndiaz.dev/fullchain.pem" ] || [ ! -f "./certs/shawndiaz.dev/privkey.pem" ]; then
    echo "Error: Certificates were not created successfully"
    exit 1
fi

# Restart the web server to pick up the new certificates
echo "Restarting web server with new certificates..."
docker-compose restart web

echo "SSL certificate setup complete!" 