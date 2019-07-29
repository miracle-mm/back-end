const knex = require('knex');

const db = require('../../database/db-config.js');

module.exports = {
  add,
  find,
  findById,
  findBy
};

function find() {
  return db('PartnerContacts').select('id', 'username', 'password');
}

async function add(user) {
  const [id] = await db('PartnerContacts').insert(user);

  return findById(id);
}

function findById(id) {
  return db('PartnerContacts')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('PartnerContacts').where(filter);
}
