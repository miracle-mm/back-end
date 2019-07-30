
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Partners')
    .then(function () {
      // Inserts seed entries
      return knex('Partners').insert([
        {
          "city": "Las Vegas",
          "country": "United States",
          "state": "Nevada",
          "email": "rosagraciano702@hotmail.com",
          "longitude": -115.149225,
          "lattitude": 36.1662859,
          "name": "Rosa Graciano"
        },
        {
          "city": "Melbourne Beach",
          "country": "United States",
          "state": "Florida",
          "email": "huntersmassage@yahoo.com",
          "longitude": -80.5603303,
          "lattitude": 28.0683496,
          "name": "Maggie Hunter"
        },
        {
          "city": "Barnstable",
          "country": "United States",
          "state": "Massachusetts",
          "email": "jwsimoes2011@hotmail.com",
          "longitude": -70.2991518721,
          "lattitude": 41.65312705,
          "name": "Janine Simoes"
        },
        {
          "city": "Arlington",
          "country": "United States",
          "state": "Texas",
          "email": "tambrakarns@yahoo.com",
          "longitude": -97.1470539066,
          "lattitude": 32.7349615,
          "name": "Tambra Karns"
        },
        {
          "city": "Phoenix",
          "country": "United States",
          "state": "Arizona",
          "email": "ckarvanek@yahoo.com",
          "longitude": -112.0773456,
          "lattitude": 33.4485866,
          "name": "Chase Karvanek"
        },
        {
          "city": "Chicago",
          "country": "United States",
          "state": "Illinois",
          "email": "chrissycat@sbcglobal.net",
          "longitude": -87.6244212,
          "lattitude": 41.8755616,
          "name": "Christine Shadley"
        },
        {
          "city": "Chicago",
          "country": "United States",
          "state": "Illinois",
          "email": "dkraay@msn.com",
          "longitude": -87.621299,
          "lattitude": 41.8217983,
          "name": "Dara Grady"
        },
        {
          "city": "Louisville",
          "country": "United States",
          "state": "Kentucky",
          "email": "sprngcook@yahoo.com",
          "longitude": -85.759407,
          "lattitude": 38.2542376,
          "name": "Spring Cook"
        },
        {
          "city": "Greensboro",
          "country": "United States",
          "state": "North Carolina",
          "email": "ggoodson2432@live.com",
          "longitude": -79.7919754,
          "lattitude": 36.0726355,
          "name": "Geoffrey Goodson"
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "ayushikroy@gmail.com",
          "longitude": -122.4192363,
          "lattitude": 37.7792808,
          "name": "Ayushi Roy"
        }
      ]);
    });
};
