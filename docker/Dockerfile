# -------------------------
# Stage 1: Build the React app
# -------------------------
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files & install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the frontend source code
COPY frontend/ ./

# Build the production bundle -> dist/
RUN npm run build


# -------------------------
# Stage 2: Nginx w/ SSL
# -------------------------
FROM nginx:stable-alpine

# Copy custom Nginx config
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copy built React files to Nginx's HTML folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP & HTTPS
EXPOSE 80
EXPOSE 443

# Final command
CMD ["nginx", "-g", "daemon off;"]
    