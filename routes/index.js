const express = require('express');
const router = express.Router();
const { projects } = require('../projects.json');

router.get('/', (req, res) => {
  res.render('index', { projects });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.message = 'Page Not Found'
  err.status = 404;
  next(err);
});

module.exports = router;