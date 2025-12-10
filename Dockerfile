FROM nginx:alpine

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy your HTML website into nginx directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# nginx entrypoint (default)
CMD ["nginx", "-g", "daemon off;"]
