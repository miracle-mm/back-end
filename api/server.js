const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');

const authRouter = require('../routes/auth/auth-router');
const partnerRouter = require('../routes/partners/partners-router.js');
const homelessRouter = require('../routes/homeless/homeless-router.js');

const apiDocsPath = path.join( __dirname, '../apidoc')
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api/auth', authRouter);
server.use('/api/partners', partnerRouter)
server.use('/api/homeless', homelessRouter)
server.use('/', express.static( apiDocsPath))


server.get('/', (req, res) => {
  return res.json({ message: 'Server is up' });
});

module.exports = server;
