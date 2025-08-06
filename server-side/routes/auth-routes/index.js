const express = require("express");
const {
  registerUser,
  LoginUser,
} = require("../../controllers/auth-controllers/index");
const authenticateMiddleware = require("../../middleware/auth-middleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", LoginUser);
router.post("/check-auth", authenticateMiddleware, (req, res) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    message: "Authenticate User",
    data: {
      user,
    },
  });
});

module.exports = router;
