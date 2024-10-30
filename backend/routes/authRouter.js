const router = require("express").Router();
const googleLogin = require("../controllers/authController");

router.get("/google", googleLogin);

module.exports = router;
