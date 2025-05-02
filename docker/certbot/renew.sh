#!/bin/sh

# Renew certificates
certbot renew --quiet

# Reload Nginx to pick up new certificates
nginx -s reload 