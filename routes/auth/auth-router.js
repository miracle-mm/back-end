const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./users-model.js');
const generateToken = require('../../auth/generateToken.js');

router.post('/register', (req, res) => {
  const user = req.body;
  console.log(user);
  const hashPW = bcrypt.hashSync(user.password, 10);
  user.password = hashPW;

  Users.add(user)
    .then(createdUser => {
      res.status(200).json(createdUser);
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error: Unable to create User' });
    });
});

module.exports = router;
