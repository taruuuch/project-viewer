const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET;
const TOKEN_EXPIRES = process.env.TOKEN_EXPIRES;

exports.generateToken = (userId) => {
  const payload = { id: userId };
  const options = { expiresIn: TOKEN_EXPIRES };

  return jwt.sign(payload, TOKEN_SECRET, options);
};