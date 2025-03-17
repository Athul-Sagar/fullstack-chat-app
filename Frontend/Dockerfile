# Stage 1: Build React App
FROM node:18 AS builder

WORKDIR /frontend

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build  # Ensure this generates 'build/' or another directory

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Adjust the path below if your build output directory is different (e.g., 'dist')
COPY --from=builder /frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]