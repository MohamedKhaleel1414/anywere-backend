const jwt = require("jsonwebtoken");

const verify = (req, res, nxt) => {
  const token = req.header("auth");
  console.log(token)
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  req.pass = verified;
  console.log(verified)
  nxt();
};

module.exports = { verify };
