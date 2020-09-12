module.exports = () => {
  const err = new Error('Page Not Found');
  err.message = 'Page Not Found'
  err.status = 404;
  next(err);
}