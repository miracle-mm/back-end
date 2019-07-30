const knex = require('knex');

const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findById,
  findBy
};

function find() {
  return db('homeless').select('id', 'firstname', 'lastname', 'longitude', 'lattitude');
}

async function add(user) {
  const [id] = await db('homeless').insert(user);

  return findById(id);
}

function findById(id) {
  return db('homeless')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('homeless').where(filter);
}
