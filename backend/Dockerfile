# Use the official Node.js image.
FROM node:18.13.0-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy the application source code.
COPY package*.json ./
COPY . .

# Install dependencies.
RUN npm install

# Expose the application port.
EXPOSE 4000

# Start the application.
CMD ["npm", "start"]