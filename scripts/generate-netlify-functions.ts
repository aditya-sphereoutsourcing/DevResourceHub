import fs from 'fs';
import path from 'path';

// Ensure netlify functions directory exists
const NETLIFY_FUNCTIONS_DIR = path.join(process.cwd(), 'netlify/functions');
if (!fs.existsSync(NETLIFY_FUNCTIONS_DIR)) {
  fs.mkdirSync(NETLIFY_FUNCTIONS_DIR, { recursive: true });
}

// Generate the API function
const apiFunction = `
import express from 'express';
import serverless from 'serverless-http';
import { registerRoutes } from '../../server/routes';

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
`;

// Write the API function to the netlify/functions directory
fs.writeFileSync(path.join(NETLIFY_FUNCTIONS_DIR, 'api.js'), apiFunction);

console.log('Successfully generated Netlify functions');