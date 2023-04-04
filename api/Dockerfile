# pull official base image
FROM node:18.15.0-alpine as builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

RUN npm install

# add app
COPY . ./

# start app
RUN ["npm", "run", "build"]

FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the builder
COPY --from=builder /app/dist /usr/share/nginx/html/

EXPOSE 9005 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]