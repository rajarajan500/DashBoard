const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/UserModels");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.send("user not found");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.send("wrong password");
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.send({ token });
});

module.exports = router;
