'use strict';
// ===============
// IMPORTS

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ===============
// SERVER CONFIG
var server = (0, _express2.default)();
var port = process.env.PORT || 3000;

// TODO: Change path to /dist after adding SASS
server.use(_express2.default.static(_path2.default.join(__dirname, '../src/public')));

// ===============
// VIEW - HANDLEBARS
server.set('views', _path2.default.join(__dirname, '../views'));
server.engine('hbs', (0, _expressHandlebars2.default)({ extname: 'hbs', defaultLayout: 'main', layoutDir: _path2.default.join(__dirname, 'views/layouts') }));
server.set('view engine', 'hbs');

// ===============
// ROUTES
server.get('/', function (req, res) {
  res.render('home');
});

server.use(function (req, res, next) {
  console.log('Looking for URL: ' + req.url);
  next();
});

server.get('/about', function (req, res) {
  res.render('about');
});

server.get('/profile', function (req, res) {
  // TODO: change to render
  res.send('profile');
});

server.get('/contacts', function (req, res) {
  // TODO: change to render
  res.send('contacts');
});

// Error Handling
// URL Not Found
server.use(function (req, res) {
  res.type('text/html');
  res.status(404);
  res.send('404');
});

// Server Error
server.use(function (req, res) {
  res.type('text/html');
  res.status(500);
  res.send('500');
});

// ===============
// SERVER START
server.listen(port, function () {
  console.log('Running @:' + port + ' ...');
});