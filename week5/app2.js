/**
 * 1. Importing Express
 * Express helps us handle web requests and responses.
 */

const express = require('express');

/**
 * 2. Initializing the app
 * express() creates an Express application object.
 */

const app = express();

/**
 * 3. Setting the port
 * The port is like a door number for our server.
 */

const PORT = 3000;

/**
 * 4. HOME ROUTE (GET REQUEST)
 *
 * app.get() tells the server:
 * "When a user visits this URL, execute this function."
 *
 * '/' represents the root/main page.
 *
 * req = request from the client
 * res = response sent back to the client
 */

app.get('/', (req, res) => {
    res.send('Welcome SVECW! You have reached the Home Page');
});

/**
 * 5. ABOUT ROUTE
 *
 * Handles:
 * http://localhost:3000/about
 */

app.get('/about', (req, res) => {
    res.send(
        'This server was built as a learning exercise for Express.js by SVECW AI department'
    );
});

/**
 * 6. DATA / JSON ROUTE
 *
 * Handles:
 * http://localhost:3000/api/status
 */

app.get('/api/status', (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "The server is healthy and responding!"
    });
});

/**
 * 7. STARTING THE SERVER
 */

app.listen(PORT, () => {
    console.log(`Success! Server is running at http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop server");
});
