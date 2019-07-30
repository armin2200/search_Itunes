const express = require('express');
const cors = require('cors');

const errorHandler = require('./handlers/error');
const searchRoute = require('./routers/search');

const app = express();
// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// };

app.use(cors());
// app.use(allowCrossDomain);
app.use(express.json());
app.use('/API/search', searchRoute);

app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

module.exports = app;
