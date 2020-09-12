const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use('/', (req, res) => {
  res.render('index');
});

app.use('/about', (req, res) => {
  res.render('about');
});

app.use('/project', (req, res) => {
  res.render('project');
});

app.listen('3000');