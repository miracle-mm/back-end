exports.up = function(knex) {
  return knex.schema
    .createTable('Services', tbl => {
      tbl.increments();
      tbl
        .string('ServiceName')
        .notNullable()
        .unique();
    })
    .createTable('Partners', tbl => {
      tbl.increments();
      tbl.string('name');
      tbl.string('email');
      tbl.string('city').notNullable();
      tbl.string('state').notNullable();
      tbl.float('longitude');
      tbl.float('lattitude');
    })
    .createTable('Homeless', tbl => {
      tbl.increments();
      tbl.string('FirstName', 32).notNullable();
      tbl.string('LastName', 32).notNullable();
      tbl.string('city');
      tbl.string('state');
      tbl.integer('zip');
      tbl.datetime('created');
      tbl.float('longitude');
      tbl.float('lattitude');
    })
    .createTable('PartnerServices', tbl => {
      tbl.increments();
      tbl
        .integer('service_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Services')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('partner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Partners')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('ServicesNeeded', tbl => {
      tbl.increments();
      tbl
        .integer('service_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Services')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('homeless_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Homeless')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('PartnerContacts', tbl => {
      tbl.increments();
      tbl.string('FirstName', 32);
      tbl.string('LastName', 32);
      tbl.string('email').notNullable();
      tbl.string('password').notNullable();
      tbl
        .integer('partner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Partners')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('PartnerContacts')
    .dropTableIfExists('ServicesNeeded')
    .dropTableIfExists('PartnerServices')
    .dropTableIfExists('Homeless')
    .dropTableIfExists('Partners')
    .dropTableIfExists('Services');
};
