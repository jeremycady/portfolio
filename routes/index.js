const express = require('express');
const router = express.Router();
const { projects } = require('../projects.json');

// home page
router.get('/', (req, res) => {
  res.render('index', { projects });
});

// about page
router.get('/about', (req, res) => {
  res.render('about');
});

// project pages - checks for 404 in project route
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

// checks for 404 in root route
router.use((req, res, next) => {
  const err = new Error('Page not Found');
  err.status = 404;
  next(err);
});

module.exports = router;