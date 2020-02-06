FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json file and install node_modules
COPY package.json package.json
RUN yarn install

# Copy all the files from the project’s root
COPY . .

RUN yarn build
