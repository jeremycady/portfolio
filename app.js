const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { projects } = require('./projects.json');

app.use(bodyParser.urlencoded( {extended: false} ))

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.use('/about', (req, res) => {
  res.render('about');
});

app.use('/project', (req, res) => {
  res.render('project');
});

app.use('/', (req, res) => {
  res.render('index', { projects });
});

app.listen('3000');