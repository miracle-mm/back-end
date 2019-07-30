const knex = require('knex');

const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findById,
  findBy
};

function find() {
  return db('homeless').select('id', 'firstname', 'lastname', 'longitude', 'latitude');
}

async function add(homelessPerson) {
  const [id] = await db('homeless').insert(homelessPerson, 'id');

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
