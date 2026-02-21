const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err);
  res.status(err.status).json({ message: err.message });
};

module.exports = errorHandlerMiddleware;
