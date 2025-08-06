const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders) {
    return res.status(401).json({
      success: false,
      message: "User is not Authenticated",
    });
  }

  const authToken = authHeaders.split(" ")[1];

  try {
    const payload = jwt.verify(authToken, "JWT_SECRET");
    req.user = payload; // Contains _id, userName, userEmail, role
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

module.exports = authenticate;
