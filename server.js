'use strict';
// ===============
// REQUIRES
const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

// ===============
// SERVER CONFIG
const server = express()
const port = process.env.PORT || 3000

server.use(express.static(path.join(__dirname, '/public')))
server.set('views', path.join(__dirname, '/views'))

server.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main'}))
server.set('view engine', 'hbs')

// ===============
// VIEW - HANDLEBARS


// ===============
// ROUTES
server.get('/', (req, res) => {
  // TODO: change to render
  res.send('home')
});

server.use((req, res, next) => {
  console.log('Looking for URL: ' + req.url)
  next()
});

server.get('/about', (req, res) => {
  // TODO: change to render
  res.send('about')
});

server.get('/profile', (req, res) => {
  // TODO: change to render
  res.send('profile')
});

server.get('/contacts', (req, res) => {
  // TODO: change to render
  res.send('contacts')
});

// Error Handling
// URL Not Found
server.use((req, res) => {
  res.type('text/html')
  res.status(404)
  res.send('404')
});

// Server Error
server.use((req, res) => {
  res.type('text/html')
  res.status(500)
  res.send('500')
});

// ===============
// SERVER START
server.listen(port, () => {
  console.log(`Fired @:${port} ...`);
});

