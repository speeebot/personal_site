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
for i in {1..30}; do
  if curl -s -o /dev/null http://localhost; then
    break
  fi
  sleep 2
done

# Verify the web server is responding
echo "Verifying web server is accessible..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost)
if [ "$HTTP_CODE" != "200" ]; then
    echo "Error: Web server is not accessible (HTTP $HTTP_CODE)"
    exit 1
fi

# Create the webroot directory and set proper permissions
echo "Setting up webroot directory..."
docker-compose exec web mkdir -p /var/www/certbot
docker-compose exec web chown -R nginx:nginx /var/www/certbot
docker-compose exec web chmod -R 755 /var/www/certbot

# Ensure SSL configuration is present
echo "Verifying SSL configuration..."
if ! docker-compose exec web test -f /etc/letsencrypt/options-ssl-nginx.conf; then
    echo "Error: SSL configuration is missing"
    exit 1
fi

if ! docker-compose exec web test -f /etc/letsencrypt/ssl-dhparams.pem; then
    echo "Error: DH parameters are missing"
    exit 1
fi

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