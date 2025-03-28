#!/bin/bash

# Ensure script exits on error
set -e

echo "==============================================="
echo "Starting DevLibGuide Netlify build process..."
echo "==============================================="

# Step 1: Install critical dependencies globally to ensure they're in PATH
echo "Installing critical build tools..."
npm install -g vite esbuild typescript

# Step 2: Install all project dependencies
echo "Installing project dependencies..."
npm ci

# Step 3: Build frontend
echo "Building frontend..."
vite build

# Step 4: Build backend for serverless
echo "Building backend for serverless..."
esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

# Step 5: Generate Netlify functions
echo "Generating Netlify functions..."
mkdir -p netlify/functions

# Generate the API function
cat > netlify/functions/api.js << 'ENDOFFILE'
const express = require('express');
const serverless = require('serverless-http');
const { registerRoutes } = require('../../server/routes');

// Initialize the Express app
const app = express();

// Configure middleware and routes
async function setupServer() {
  // Add JSON parsing middleware
  app.use(express.json());
  
  // Register all API routes
  await registerRoutes(app);
  
  return app;
}

// Handler for the Netlify function
exports.handler = async (event, context) => {
  const app = await setupServer();
  const handler = serverless(app);
  return handler(event, context);
};
ENDOFFILE

# Step 6: Copy _redirects file to dist directory
echo "Setting up redirects..."
cp client/public/_redirects dist/

echo "==============================================="
echo "Build completed successfully!"
echo "==============================================="