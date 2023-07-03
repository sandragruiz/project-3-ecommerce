const jwt = require('jsonwebtoken');
require('dotenv').config();

// Generate a JWT token
function signToken({ email, username, _id }) {
  const payload = { email, username, _id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}

// Middleware to verify the JWT token in incoming requests
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the "Authorization" header

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user data to the request object
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = {
  signToken,
  authMiddleware,
};
