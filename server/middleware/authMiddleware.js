
const jwt = require("jsonwebtoken");

const MiddleWare = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.send("no token found");
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
     next();
  } catch {
    res.send("invalid token");
  }
};

module.exports = MiddleWare;
