
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        {"serviceName":"Volunteering"},
        {"serviceName":"Partnering"},
        {"serviceName":"Media coverage"},
        {"serviceName":"Donating"},
        {"serviceName":"Something else"},
        {"serviceName":"Joining the MM team"},
        {"serviceName":"Partnering for (orgs, govt, etc.)"},
        {"serviceName":"Openings at MM"}
      ]);
    });
};
