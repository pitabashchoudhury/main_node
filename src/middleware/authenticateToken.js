const jwt = require("jsonwebtoken");
const AppError = require("../utils/error_instance");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // Token missing or wrong format
    return next(new AppError("Access token missing or malformed", 401));
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      const message =
        err.name === "TokenExpiredError"
          ? "Access token expired"
          : "Invalid access token";
      return next(new AppError(message, 403));
    }

    // Token is valid
    req.user = decoded;
    next();
  });
};

module.exports = authenticateToken;

