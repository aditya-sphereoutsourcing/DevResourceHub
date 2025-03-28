#!/bin/bash

# Ensure the script stops on errors
set -e

echo "Starting Netlify deployment process..."

# 0. Ensure development dependencies are installed for the build
echo "Installing dependencies..."
npm ci

# 1. Build the application
echo "Building the application..."
# Use NPX to ensure vite is found in the path
npx vite build
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

# 2. Generate Netlify functions
echo "Generating Netlify functions..."
mkdir -p netlify/functions
node -e "
const fs = require('fs');
const path = require('path');

// Ensure netlify functions directory exists
const NETLIFY_FUNCTIONS_DIR = path.join(process.cwd(), 'netlify/functions');
if (!fs.existsSync(NETLIFY_FUNCTIONS_DIR)) {
  fs.mkdirSync(NETLIFY_FUNCTIONS_DIR, { recursive: true });
}

// Generate the API function
const apiFunction = \`
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
\`;

// Write the API function to the netlify/functions directory
fs.writeFileSync(path.join(NETLIFY_FUNCTIONS_DIR, 'api.js'), apiFunction);

console.log('Successfully generated Netlify functions');
"

# 3. Ensure _redirects is copied to the build directory
echo "Ensuring redirects file is in place..."
cp client/public/_redirects dist/

echo "Deployment preparation complete!"
echo "You can now deploy the 'dist' directory to Netlify."
echo "Remember to configure the following environment variables in the Netlify UI:"
echo "- NODE_ENV=production"
echo "- DATABASE_URL=your_database_url (if applicable)"
echo "- Any other API keys or secrets used by your application"