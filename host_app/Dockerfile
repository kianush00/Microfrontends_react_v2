# pull official base image
FROM node:18.15.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

RUN npm install
# add app
COPY . ./

EXPOSE 9000

RUN npm install webpack --save-dev

# start app
CMD ["npm" , "start"]