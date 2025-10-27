const express = require('express');
const app = express();
const port = 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from the Node.js Docker Container!');
});

// Start the server
app.listen(port, () => {
  console.log(`Node.js App listening at http://localhost:${port}`);
});
