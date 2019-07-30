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

async function add(homelessPerson) {
  console.log('homeless person', homelessPerson)
  const [id] = await db('homeless').insert(homelessPerson);
  console.log(id)

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
