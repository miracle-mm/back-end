const jwt = require('jsonwebtoken');
const secret = require('../config/secrets.js');

module.export = function(user) {
  const jwtPayload = {
    subject: user.id,
    username: user.username
  };
  const jwtOptions = {
    expiresIn: '3d'
  };
  return jwt.sign(jwtPayload.secret.jwtSecret, jwtOptions);
};
