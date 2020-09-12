const express = require('express');
const router = express.Router();
const { projects } = require('../projects.json');
const error = require('../notFoundError');


router.get('/:id', (req, res) => {
  const { id } = req.params;
  for (let project in projects) {
    if (id === project.github_name) {
      
      return res.render('project', { projects, id});
    }
  }

  const err = new Error('Page Not Found');
  err.message = 'Page Not Found'
  err.status = 404;
  next(err);
});

module.exports = router;