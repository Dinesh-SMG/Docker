// Node.js Web API for Dice Roll Simulation
const http = require('http');

// Configuration
const PORT = 3000;
const DICE_SIDES = 20;

/**
 * Simulates a dice roll.
 * @param {number} sides - The number of sides on the die.
 * @returns {number} The roll result.
 */
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set CORS headers to allow access from any origin (useful for development)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/roll' || req.url === '/') {
        const rollResult = rollDice(DICE_SIDES);

        const responseData = {
            timestamp: new Date().toISOString(),
            die: `d${DICE_SIDES}`,
            result: rollResult,
            status: rollResult === DICE_SIDES ? 'Critical Success!' : (rollResult === 1 ? 'Critical Failure!' : 'Standard Roll.')
        };

        // Send a 200 OK response with the JSON data
        res.writeHead(200);
        res.end(JSON.stringify(responseData, null, 2));
    } else {
        // Handle 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found. Try accessing / or /roll.');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Node.js Dice Roll API running at http://localhost:${PORT}/`);
    console.log(`Container ready to serve requests on internal port ${PORT}.`);
});
