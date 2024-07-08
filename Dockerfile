# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the app
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build"]
