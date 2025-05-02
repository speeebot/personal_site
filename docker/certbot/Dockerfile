FROM certbot/certbot:latest

# Create directory for certbot configuration
RUN mkdir -p /etc/letsencrypt

# Copy renewal script
COPY renew.sh /usr/local/bin/renew.sh
RUN chmod +x /usr/local/bin/renew.sh

# Set up cron for automatic renewal
RUN echo "0 0 * * * /usr/local/bin/renew.sh" > /etc/crontabs/root

# Start cron in the foreground
CMD ["crond", "-f"] 