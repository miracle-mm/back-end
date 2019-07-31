const knex = require('knex');

const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findById,
  findBy,
  update,
  remove
};

function find() {
  return db('homeless').select('id', 'firstName', 'lastName', 'longitude', 'latitude');
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

async function update(id, changes) {
  const updatedHomeless = await db('homeless').update(changes).where({id})
  console.log(updatedHomeless)

  return findById(id)
}

async function remove (id){
  return db('homeless').del().where({id})
}