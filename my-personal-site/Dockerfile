# --- Stage 1: Build the React app ---
    FROM node:18-alpine AS build
    WORKDIR /app
    
    # Copy package.json and lock file first, then install
    COPY package*.json ./
    RUN npm install
    
    # Copy the rest of the source code
    COPY . .
    
    # Build the production bundle
    RUN npm run build
    
    # --- Stage 2: Serve with nginx ---
    FROM nginx:stable-alpine
    # Copy build output to nginx html folder
    COPY --from=build /app/dist /usr/share/nginx/html
    # For CRA, it would be /app/build instead of /app/dist
    
    # Expose port 80
    EXPOSE 80
    
    # Run nginx in the foreground
    CMD ["nginx", "-g", "daemon off;"]
    