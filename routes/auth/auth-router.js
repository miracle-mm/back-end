const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Partners = require('../../data-models/partners-model.js');
const generateToken = require('../../auth/generateToken.js');

/**
 * @api {post} /api/auth/register POST /api/auth/register
 * @apiVersion 1.0.0
 * @apiName Register Partner
 * @apiGroup Partners
 * 
 * @apiExample Request
 * axios.post('/api/auth/register');
 * 
 * @apiParam {string} [name]      Optional name 
 * @apiParam {string} email       Mandatory email
 * @apiParam {string} password    Mandatory password  
 * @apiParam {string} [city]      Optional city 
 * @apiParam {string} [state]     Optional state 
 * @apiParam {string} [country]   Optional country 
 * @apiParam {float} [longitude]  Optional longitude 
 * @apiParam {float} [latitude]   Optional latitude 
 * 
 * @apiSuccess {number} id Partner ID
 * @apiSuccess {string} [name]      Partner Name
 * @apiSuccess {string} email       Partner Email
 * @apiSuccess {string} [city]      Partner City 
 * @apiSuccess {string} [state]     Partner State 
 * @apiSuccess {string} [country]   Partner Country 
 * @apiSuccess {float} [longitude]  Partner Longitude 
 * @apiSuccess {float} [latitude]   Partner Latitude 
 * @apiSuccess {string} password    Hashed Password 
 * 
 * @apiSuccessExample {json} Response
  * {
    "id": 447,
    "name": "Joels food bank",
    "email": "yeahright@noway.com",
    "city": "Denver",
    "state": "CO",
    "country": "USA",
    "longitude": -104.988415,
    "latitude": 39.749885,
    "password": "$2a$10$l1AbQFAGX.CZOEQm1RgaP.qVstDpteUXm2XuqhT9q280KMnQDQYxi"
  }
 */

router.post('/register', (req, res) => {
  const user = req.body;
  const hashPW = bcrypt.hashSync(user.password, 10);
  user.password = hashPW;
  
  Partners.add(user)
    .then(createdUser => {
      res.status(200).json(createdUser);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/**
 * @api {post} /api/auth/login POST /api/auth/login
 * @apiVersion 1.0.0
 * @apiName Login Partner
 * @apiGroup Partners
 * 
 * @apiExample Request
 * axios.post('/api/auth/login');
 * 
 * @apiParam {string} email       Mandatory email
 * @apiParam {string} password    Mandatory password  
 * 
 * @apiSuccess {string} [message]     Welcome Partner Email
 * @apiSuccess {string} token       Token given for login validation

 * 
 * @apiSuccessExample {json} Response
  * {
    "id": 447,
    "name": "Joels food bank",
    "email": "yeahright@noway.com",
    "city": "Denver",
    "state": "CO",
    "country": "USA",
    "longitude": -104.988415,
    "latitude": 39.749885,
    "password": "$2a$10$l1AbQFAGX.CZOEQm1RgaP.qVstDpteUXm2XuqhT9q280KMnQDQYxi"
  }
 */

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  Partners.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.email}`,
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
