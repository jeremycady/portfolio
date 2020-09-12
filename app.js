const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(bodyParser.urlencoded( {extended: false} ))

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.use(mainRoutes);
app.use('/project', projectRoutes);

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.render('index', { err });
});

app.listen('3000');