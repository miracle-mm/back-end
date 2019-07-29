const dotenv = require('dotenv');

const server = require('./api/server.js');

const PORT = process.env.PORT || 5555;

server.listen(PORT, () => {
  console.log(`/n**** Server listening on port ${PORT}. ****`);
});
