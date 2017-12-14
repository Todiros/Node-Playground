# RECURSION
### Node Playground
---

This project exist for the sole purpose of explaining itself.

## Node

Initialize node

``` 
npm init
```

Start server

```
node server.js
```
Where **server.js** is the main file. (index.js / app.js)

## Express

Install with npm

``` 
npm install express -S
```

### Basic Setup

``` javascript
const express = require('express');
// ES6 / ES2015
// import express from 'express';

const server = express();
const port = process.env.PORT || 3000;

server.listen(3000, () => {
  console.log(`Fired @ :3000 ...`);
});
```

### Routes

##### Basic
``` javascript
server.get('/', (req, res) => {
  res.send('home');
});

server.get('/about', (req, res) => {
  res.send('about');
});
```

##### Advanced
``` javascript
server.get('/', (req, res) => {
   res.render('home'); 
});

// Chaining requests until it hits the correct one 
server.use((req, res, next) => {
   console.log(`Looking for URL: ${req.url}`);
   next();
});

// rendering views
server.get('/about', (req, res) => {
   res.render('about'); 
});

server.get('/credits', (req, res) => {
   res.render('credits');  
});

// Handling Errors
// Route Not Found
server.use((req, res) => {
   res.type('text/html');
   res.status(404);
   res.render('404');
});

// Server Error
server.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500);
   res.render('500');
});
```
## PostgreSQL
```
// TODO
```
## AJAX && jQuery
```
// TODO
```
## Handlebars
```
// TODO
```
## Materialize
```
// TODO
```
