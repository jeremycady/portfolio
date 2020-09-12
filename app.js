const express = require('express');
const app = express();

// add body-parser for json
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( {extended: false} ))

// set static server
app.use('/static', express.static('public'));

// set pug as view engine
app.set('view engine', 'pug');

// add routes
const routes = require('./routes');
app.use(routes);

// check for 404 or return 500 error
app.use((err, req, res, next) => {
  if (err.status === 404) {
    console.log(`${err.status}: ${err.message}`);
    return res.render('page-not-found', { err });
  } else {
    err.status = 500;
    err.message = "There was an error on the server"
    console.log(`${err.status}: ${err.message}`);
    return res.render('error', { err });
  }
});

app.listen('3000');