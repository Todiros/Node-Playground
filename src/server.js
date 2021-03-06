'use strict'
// ===============
// IMPORTS
import path from 'path'
import express from 'express'
import hbs from 'express-handlebars'

// ===============
// SERVER CONFIG
const server = express()
const port = process.env.PORT || 3000

// TODO: Change path to /dist after adding SASS
server.use(express.static(path.join(__dirname, '../src/public')))

// ===============
// VIEW - HANDLEBARS
server.set('views', path.join(__dirname, '../views'))
server.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutDir: path.join(__dirname, 'views/layouts')}))
server.set('view engine', 'hbs')

// ===============
// ROUTES
server.get('/', (req, res) => {
  res.render('home')
});

server.use((req, res, next) => {
  console.log('Looking for URL: ' + req.url)
  next()
});

server.get('/about', (req, res) => {
  res.render('about')
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
  console.log(`Running @:${port} ...`)
});

