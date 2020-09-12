const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( {extended: false} ))

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const routes = require('./routes');

app.use(routes);

app.use((req, res) => {
  
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.render('index', { err });
  } else {
    err.status = 500;
    err.message = 'There was an issue on the server';
    res.render('index', { err });
  }
});

app.listen('3000');