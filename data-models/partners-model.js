const knex = require('knex');

const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findById,
  findBy,
  update,
  remove
}

function find() {
  return db('partners').select('id', 'name', 'email', 'longitude', 'latitude');
}

async function add(partner) {
  console.log('partner in data model', partner)
  const [id] = await db('partners').insert(partner, 'id');
  console.log('partner after Db add', id)

  return findById(id);
}

function findById(id) {
  return db('partners')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('partners').where(filter);
}

async function update(id, changes) {
  const newPartner = await db('partners').update(changes).where({id})

  return findById(id)
}

async function remove (id){
  return db('partners').del().where({id})
}
