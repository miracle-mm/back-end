const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', (req, res) => {
  return res.json({ message: 'Server is up' });
});

module.exports = server;
