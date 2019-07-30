const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const authRouter = require('../routes/auth/auth-router');
const partnerRouter = require('../routes/partners/partners-router.js');
const homelessRouter = require('../routes/homeless/homeless-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api/auth', authRouter);
server.use('/api/partners', partnerRouter)


server.get('/', (req, res) => {
  return res.json({ message: 'Server is up' });
});

module.exports = server;
