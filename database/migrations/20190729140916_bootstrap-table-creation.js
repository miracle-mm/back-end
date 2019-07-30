exports.up = function(knex) {
  return knex.schema
    .createTable('services', tbl => {
      tbl.increments();
      tbl
        .string('serviceName')
        .notNullable()
        .unique();
    })
    .createTable('partners', tbl => {
      tbl.increments();
      tbl.string('name', 128);
      tbl.string('email', 64);
      tbl.string('city')
      tbl.string('state', 32)
      tbl.string('country', 32)
      tbl.float('longitude', 32);
      tbl.float('latitude', 32);
    })
    .createTable('homeless', tbl => {
      tbl.increments();
      tbl.string('firstName', 32).notNullable();
      tbl.string('lastName', 32).notNullable();
      tbl.string('city');
      tbl.string('state');
      tbl.integer('zip');
      tbl.string('country', 64)
      tbl.datetime('created');
      tbl.float('longitude');
      tbl.float('latitude');
    })
    .createTable('partnerServices', tbl => {
      tbl.increments();
      tbl
        .integer('service_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('services')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('partner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('partners')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('servicesNeeded', tbl => {
      tbl.increments();
      tbl
        .integer('service_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('services')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('homeless_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('homeless')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('servicesNeeded')
    .dropTableIfExists('partnerServices')
    .dropTableIfExists('homeless')
    .dropTableIfExists('partners')
    .dropTableIfExists('services');
};
