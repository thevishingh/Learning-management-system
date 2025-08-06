const jwt = require("jsonwebtoken");

const verifyToken = (token, secretKey) => {
  return verifyToken(token, secretKey);
};

const authenticate = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders) {
    return res.status(401).json({
      success: flase,
      message: "User is not Authenticated",
    });
  }

  // Access Token
  const authToken = authHeaders.split(" ")[1];

  const payload = verifyToken(token, "JWT_SECRET");

  req.user = payload;

  next();
};

module.exports = authenticate;