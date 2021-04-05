module.exports = errorHandler;

function errorHandler(err, req, res, next) {
  res.setHeader("Content-Type", "application/json");
  if (typeof err === "string") {
    // custom application error
    return res.status(400).json({ message: err, status: 400 });
  }

  if (err.name === "ValidationError") {
    // mongoose validation error
    return res.status(400).json({ message: err.name, status: 400 });
  }

  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ message: "Invalid Token", status: 401 });
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message, status: 400 });
}
