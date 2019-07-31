exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("homeless")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("homeless").insert([
        {
          firstName: "Liam",
          lastName: "Liam",
          city: "Atlanta",
          state: "GA",
          zip: 30305,
          country: "United States",
          created: "2019-07-31",
          longitude: 84.388,
          latitude: 33.749
        },
        {
          firstName: "Emma",
          lastName: "Emma",
          city: "Chicago",
          state: "IL",
          zip: 60007,
          country: "United States",
          created: "2019-07-31",
          longitude: 87.6298,
          latitude: 41.8781
        },
        {
          firstName: "Noah",
          lastName: "Noah",
          city: "San Francisco",
          state: "CA",
          zip: 94115,
          country: "United States",
          created: "2019-07-31",
          longitude: 122.4194,
          latitude: 37.7749
        },
        {
          firstName: "Olivia",
          lastName: "Olivia",
          city: "Atlanta",
          state: "GA",
          zip: 30305,
          country: "United States",
          created: "2019-07-31",
          longitude: 84.388,
          latitude: 33.749
        },
        {
          firstName: "William",
          lastName: "William",
          city: "Atlanta",
          state: "GA",
          zip: 30305,
          country: "United States",
          created: "2019-07-31",
          longitude: 84.388,
          latitude: 33.749
        },
        {
          firstName: "Ava",
          lastName: "Ava",
          city: "New York",
          state: "NY",
          zip: 10001,
          country: "United States",
          created: "2019-07-31",
          longitude: 74.006,
          latitude: 40.7128
        },
        {
          firstName: "James",
          lastName: "James",
          city: "San Francisco",
          state: "CA",
          zip: 94115,
          country: "United States",
          created: "2019-07-31",
          longitude: 122.4194,
          latitude: 37.7749
        },
        {
          firstName: "Isabella",
          lastName: "Isabella",
          city: "San Francisco",
          state: "CA",
          zip: 94115,
          country: "United States",
          created: "2019-07-31",
          longitude: 122.4194,
          latitude: 37.7749
        },
        {
          firstName: "Oliver",
          lastName: "Oliver",
          city: "Chicago",
          state: "IL",
          zip: 60007,
          country: "United States",
          created: "2019-07-31",
          longitude: 87.6298,
          latitude: 41.8781
        },
        {
          firstName: "Sophia",
          lastName: "Sophia",
          city: "Atlanta",
          state: "GA",
          zip: 30305,
          country: "United States",
          created: "2019-07-31",
          longitude: 84.388,
          latitude: 33.749
        }
      ]);
    });
};
