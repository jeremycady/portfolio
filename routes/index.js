const express = require('express');
const router = express.Router();
const { projects } = require('../projects.json');

router.get('/', (req, res) => {

  res.render('index', { projects });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/projects/:id', (req, res, next) => {
  const projectId = req.params.id;

  for (let project of projects) {
    if (projectId === project.github_name) {
      return res.render('project', { projects, projectId});
    }
  }
  
  const err = new Error('Page not Found');
  err.status = 404;
  next(err);
});

router.use((req, res, next) => {
  const err = new Error('Page not Found');
  err.status = 404;
  next(err);
});

module.exports = router;