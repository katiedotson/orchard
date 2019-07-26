const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  history = require('connect-history-api-fallback'),
  app = express(),
  routes = require('./server/routes/router.js'),
  credentials = require('./server/config/config').credentials;
app.use(express.static('public'));
app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}))
app.use(cors());

//SESSION
app.use(require('express-session')({
  secret: credentials.cookieSecret,
  resave: false,
  saveUninitialized: true
}));

//ROUTES
app.use('/', routes);

//AUTHORIZATION
var auth = require('./server/config/configure-passport')(app, {
  baseURL: process.env.BASE_URL,
  providers: credentials.authorizedProviders,
  successRedirect: '/account',
  failureRedirect: '/login'
});
auth.init();
auth.registerRoutes();

//LISTEN
app.listen(3000, 'localhost', () => {
  console.dir('listening at port 3000');
});