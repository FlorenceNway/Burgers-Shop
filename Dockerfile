# multistage building
# node: node version - OS
FROM node:12.16.3-alpine AS projectBuild   
WORKDIR /app
COPY . .
RUN npm ci && npm run build
# npm ci is for prod build

# you could totally use nginx:alpine here too 
# nginx == webserver 
FROM nginx:latest
# COPY --from=0 /app/build /usr/share/nginx/html
COPY --from=projectBuild /app/build /usr/share/nginx/html


# command - docker build -t <projectName>