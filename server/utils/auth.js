const jwt = require('jsonwebtoken');
require('dotenv').config();

// Generate a JWT token
function signToken({ email, username, _id }) {
  const payload = { email, username, _id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}

// Middleware to verify the JWT token in incoming requests
function authMiddleware ({ req }) {
  // allows token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }
  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  return req;
}
module.exports = {
  signToken,
  authMiddleware,
};
