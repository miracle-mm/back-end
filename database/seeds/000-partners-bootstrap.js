exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Partners')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Partners').insert([
        { city: 'Boulder', state: 'CO', name: 'Boulder Food Bank' },
        { city: 'Denver', state: 'CO', name: 'Denver Shelter' },
        { city: 'Denver', state: 'CO' }
      ]);
    });
};
