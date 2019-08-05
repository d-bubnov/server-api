FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json file
COPY package.json ./

# Install node_modules
RUN npm install

# Copy all the files from the project’s root
COPY . .
