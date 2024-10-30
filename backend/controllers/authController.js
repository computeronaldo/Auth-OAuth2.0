const { oauth2Client } = require("../utils/googleConfig");
const axios = require("axios");
const User = require("../models/user.models");
const jwt = require("jsonwebtoken");

const googleLogin = async (req, res) => {
  try {
    const { code } = req.query;
    // Exchange authorization code for access token
    const { tokens } = await oauth2Client.getToken(code);

    oauth2Client.setCredentials(tokens);

    // Fetch user profile information using the access token
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
    );
    const { email, name, picture } = userRes.data;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, image: picture });
    }

    const token = jwt.sign(
      { _id: user._id, email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "12h" }
    );

    const cookieOptions = {
      httpOnly: true,
      secure: false,
      maxAge: 12 * 60 * 60 * 1000,
      sameSite: "lax",
    };

    res.cookie("token", token, cookieOptions);
    return res.redirect(`http://localhost:5173/dashboard`);
  } catch (err) {
    console.error("Error in googleLogin:", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = googleLogin;
