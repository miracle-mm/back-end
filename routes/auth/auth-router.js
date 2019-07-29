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

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.FirstName} ${user.LastName}`,
          token
        });
      } else {
        res.status(401).json({ message: 'Please Provide Valid Credentials' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Server Error: Unable to Login' });
    });
});

module.exports = router;
