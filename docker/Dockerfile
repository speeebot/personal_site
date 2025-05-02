# -------------------------
# Stage 1: Nginx w/ SSL
# -------------------------
FROM nginx:stable-alpine

# Install openssl for generating DH parameters
RUN apk add --no-cache openssl

# Copy SSL configuration script
COPY docker/ssl-config.sh /docker-entrypoint.d/40-ssl-config.sh
RUN chmod +x /docker-entrypoint.d/40-ssl-config.sh

# Copy custom Nginx config
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copy built React files to Nginx's HTML folder
COPY frontend/dist /usr/share/nginx/html

# Expose HTTP & HTTPS
EXPOSE 80
EXPOSE 443

# Final command
CMD ["nginx", "-g", "daemon off;"]
    