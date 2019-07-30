const knex = require('knex');

const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findById,
  findBy
};

function find() {
  return db('Partners').select('id', 'name', 'email', 'longitude', 'lattitude');
}

async function add(user) {
  const [id] = await db('Partners').insert(user);

  return findById(id);
}

function findById(id) {
  return db('Partners')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('Partners').where(filter);
}
