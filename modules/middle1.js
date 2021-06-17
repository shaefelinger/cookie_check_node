const middle1 = (req, res, next) => {
  console.log('Middleware middle1 is working');
  next();
};

module.exports = middle1;
