const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

// View - Handlebars
// Routes
server.get('/', (req, res) => {
    res.send('home');
});


// Server Start
server.listen(port, () => {
  console.log(`Fired @:${port} ...`);
});

