
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('partners').del()
    .then(function () {
      // Inserts seed entries
      return knex('partners').insert([
        {
          "city": "South Lake Tahoe",
          "country": "United States",
          "state": "California",
          "email": "nicolezaborsky@charter.net",
          "longitude": -119.9843482,
          "latitude": 38.9332411,
          "name": "Nicole Zaborsky"
        },
        {
          "city": "Newport News",
          "country": "United States",
          "state": "Virginia",
          "email": "jlbaker@nnva.gov",
          "longitude": -76.4321089,
          "latitude": 36.9786449,
          "name": "Jill Baker"
        },
        {
          "city": "Cincinnati",
          "country": "United States",
          "state": "Ohio",
          "email": "meganb@higherbranches.org",
          "longitude": -84.5124602,
          "latitude": 39.1014537,
          "name": null
        },
        {
          "city": "Tacoma",
          "country": "United States",
          "state": "Washington",
          "email": "pattis@ccsww.org",
          "longitude": -122.4398746,
          "latitude": 47.2495798,
          "name": null
        },
        {
          "city": "San Jose",
          "country": "United States",
          "state": "California",
          "email": "gillianz@gmail.com",
          "longitude": -121.8905833,
          "latitude": 37.3361905,
          "name": null
        },
        {
          "city": "Redwood City",
          "country": "United States",
          "state": "California",
          "email": "linguyen@smchsa.org",
          "longitude": -122.3330573,
          "latitude": 37.496904,
          "name": null
        },
        {
          "city": "Denver",
          "country": "United States",
          "state": "Colorado",
          "email": "catherine@hsc-denver.org",
          "longitude": -104.9653271,
          "latitude": 39.7348381,
          "name": null
        },
        {
          "city": "Louisville",
          "country": "United States",
          "state": "Kentucky",
          "email": "thekingoftoys@yahoo.com",
          "longitude": -85.759407,
          "latitude": 38.2542376,
          "name": null
        },
        {
          "city": "Boulder City",
          "country": "United States",
          "state": "Nevada",
          "email": "marshfam2@yahoo.com",
          "longitude": -114.8324851,
          "latitude": 35.9785912,
          "name": null
        },
        {
          "city": "Oakland",
          "country": "United States",
          "state": "California",
          "email": "benkross@gmail.com",
          "longitude": -122.2485801,
          "latitude": 37.7857615,
          "name": null
        },
        {
          "city": "Abingdon",
          "country": "United States",
          "state": "Maryland",
          "email": "e.shenkman@gmail.com",
          "longitude": -76.2719012,
          "latitude": 39.468164,
          "name": null
        },
        {
          "city": "Petrolia",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "amber.mccutcheon@outlook.com",
          "longitude": -79.7182638,
          "latitude": 41.0170655,
          "name": null
        },
        {
          "city": "Dallas",
          "country": "United States",
          "state": "Texas",
          "email": "sherdavis56@gmail.com",
          "longitude": -96.7968559,
          "latitude": 32.7762719,
          "name": null
        },
        {
          "city": "Atlanta",
          "country": "United States",
          "state": "Georgia",
          "email": "cheadlee@gpb.org",
          "longitude": -84.3901849,
          "latitude": 33.7490987,
          "name": null
        },
        {
          "city": "Fontana",
          "country": "United States",
          "state": "California",
          "email": "dmarq11111@aol.com",
          "longitude": -117.435048,
          "latitude": 34.0922335,
          "name": null
        },
        {
          "city": "Hickory",
          "country": "United States",
          "state": "North Carolina",
          "email": "derekccline@me.com",
          "longitude": -81.3442915,
          "latitude": 35.7333312,
          "name": null
        },
        {
          "city": "Mesa",
          "country": "United States",
          "state": "Arizona",
          "email": "michelle@vikingpremiumprint.com",
          "longitude": -111.8314773,
          "latitude": 33.4151117,
          "name": null
        },
        {
          "city": "Austin",
          "country": "United States",
          "state": "Nevada",
          "email": "gf@petsofthehomeless.org",
          "longitude": -116.8537227,
          "latitude": 39.5158825,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "nunezahmed@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "Houston",
          "country": "United States",
          "state": "Texas",
          "email": "james@crosspoint247.com",
          "longitude": -95.339711,
          "latitude": 29.9906423,
          "name": null
        },
        {
          "city": "San Antonio",
          "country": "United States",
          "state": "Texas",
          "email": "loren@ti2ts.com",
          "longitude": -98.4951405,
          "latitude": 29.4246002,
          "name": null
        },
        {
          "city": "Tacoma",
          "country": "United States",
          "state": "Washington",
          "email": "cityofdestinyoutreach@gmail.com",
          "longitude": -122.4398746,
          "latitude": 47.2495798,
          "name": null
        },
        {
          "city": "Tacoma",
          "country": "United States",
          "state": "Washington",
          "email": "heather@soundoutreach.org",
          "longitude": -122.4398746,
          "latitude": 47.2495798,
          "name": null
        },
        {
          "city": "Ukiah",
          "country": "United States",
          "state": "California",
          "email": "gonsalesc@rcs4kids.org",
          "longitude": -123.2077861,
          "latitude": 39.1501662,
          "name": null
        },
        {
          "city": "Reno",
          "country": "United States",
          "state": "Nevada",
          "email": "lori@renocpr.org",
          "longitude": -119.8136744,
          "latitude": 39.52927,
          "name": "Lori Broussard"
        },
        {
          "city": "Sanford",
          "country": "United States",
          "state": "North Carolina",
          "email": "ndco@ndco.com",
          "longitude": -79.1802994,
          "latitude": 35.4798757,
          "name": "Debra Thomas"
        },
        {
          "city": "York",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "jwilson@yorkrescuemission.org",
          "longitude": -76.727392,
          "latitude": 39.962398,
          "name": "Jan Wilson"
        },
        {
          "city": "Norristown",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "paulette@whitekettle.com",
          "longitude": -75.3399048,
          "latitude": 40.121497,
          "name": "Paulette Whitekettle"
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "guardianofthepeople1@gmail.com",
          "longitude": -117.1627714,
          "latitude": 32.7174209,
          "name": null
        },
        {
          "city": "Philadelphia",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "amhouse1@gmail.com",
          "longitude": -75.0439566,
          "latitude": 40.0133374,
          "name": null
        },
        {
          "city": "Knoxville",
          "country": "United States",
          "state": "Tennessee",
          "email": "aot4tn@gmail.com",
          "longitude": -83.9210261,
          "latitude": 35.9603948,
          "name": null
        },
        {
          "city": "Santa Ana",
          "country": "United States",
          "state": "California",
          "email": "brad.chinn@gmail.com",
          "longitude": -117.8704931,
          "latitude": 33.7500378,
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "zenmomtofour@gmail.com",
          "longitude": -122.2848908,
          "latitude": 47.5504875,
          "name": null
        },
        {
          "city": "Nashua",
          "country": "United States",
          "state": "New Hampshire",
          "email": "joeyylambert@gmail.com",
          "longitude": -71.467566,
          "latitude": 42.7653662,
          "name": "Joe Lambert"
        },
        {
          "city": "Los Angeles",
          "country": "United States",
          "state": "California",
          "email": "osheacanyousee@gmail.com",
          "longitude": -118.2427666,
          "latitude": 34.0536909,
          "name": "Brendan O'Shea"
        },
        {
          "city": "Oakland",
          "country": "United States",
          "state": "New Jersey",
          "email": "jeff@nonchalance.com",
          "longitude": -74.2430988,
          "latitude": 41.0220483,
          "name": null
        },
        {
          "city": "Washington",
          "country": "United States",
          "state": "District of Columbia",
          "email": "monica@miriamskitchen.org",
          "longitude": -77.0365625,
          "latitude": 38.8950092,
          "name": "Mónica Díaz"
        },
        {
          "city": "Las Vegas",
          "country": "United States",
          "state": "Nevada",
          "email": "thepalms1312@outlook.com",
          "longitude": -115.149225,
          "latitude": 36.1662859,
          "name": "Jack Burress"
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "info@nonprofitleader.org",
          "longitude": -122.3300624,
          "latitude": 47.6038321,
          "name": "Garhett Morgan"
        },
        {
          "city": "Atlantic Highlands",
          "country": "United States",
          "state": "New Jersey",
          "email": "alisondougherty@hotmail.com",
          "longitude": -74.050084,
          "latitude": 40.402965,
          "name": null
        },
        {
          "city": "Washington",
          "country": "United States",
          "state": "District of Columbia",
          "email": "melissa.sullivan.a@gmail.com",
          "longitude": -77.0365625,
          "latitude": 38.8950092,
          "name": null
        },
        {
          "city": "Fort Worth",
          "country": "United States",
          "state": "Texas",
          "email": "clayfam1@yahoo.com",
          "longitude": -97.3327459,
          "latitude": 32.753177,
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "New York",
          "email": "moore826@gmail.com",
          "longitude": -73.9495823,
          "latitude": 40.6501038,
          "name": "Kathryn Moore"
        },
        {
          "city": "Howard",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "marcabruno@yahoo.com",
          "longitude": -77.7278831,
          "latitude": 40.9699889,
          "name": null
        },
        {
          "city": "Flagstaff",
          "country": "United States",
          "state": "Arizona",
          "email": "garry.b.ancheta@gmail.com",
          "longitude": -111.6514259,
          "latitude": 35.199458,
          "name": null
        },
        {
          "city": "Phoenix",
          "country": "United States",
          "state": "Arizona",
          "email": "dagphx@aol.com",
          "longitude": -112.0773456,
          "latitude": 33.4485866,
          "name": null
        },
        {
          "city": "Azusa",
          "country": "United States",
          "state": "California",
          "email": "ryan.r.montague@gmail.com",
          "longitude": -117.9056046,
          "latitude": 34.1338751,
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "California",
          "email": "jen.mcclure@jem.consulting",
          "longitude": -122.3558473,
          "latitude": 37.7884969,
          "name": null
        },
        {
          "city": "Berkeley",
          "country": "United States",
          "state": "California",
          "email": "ejmorera32@gmail.com",
          "longitude": -122.2728639,
          "latitude": 37.8708393,
          "name": null
        },
        {
          "city": "Charles City",
          "country": "United States",
          "state": "Virginia",
          "email": "sarahoh00@gmail.com",
          "longitude": -77.1794182,
          "latitude": 37.3182038,
          "name": "Sarah Oh"
        },
        {
          "city": "Toms River",
          "country": "United States",
          "state": "New Jersey",
          "email": "kayleyschvaneveldt@yahoo.com",
          "longitude": -74.27719,
          "latitude": 39.980387,
          "name": null
        },
        {
          "city": "Carson",
          "country": "United States",
          "state": "California",
          "email": "gilly999@aol.com",
          "longitude": -118.2517547,
          "latitude": 33.8322043,
          "name": "Gilbert Yi"
        },
        {
          "city": "Dana Point",
          "country": "United States",
          "state": "California",
          "email": "janette.loreto@gmail.com",
          "longitude": -117.6981075,
          "latitude": 33.4669721,
          "name": null
        },
        {
          "city": "Port St. Lucie",
          "country": "United States",
          "state": "Florida",
          "email": "michelleyun99@gmail.com",
          "longitude": -80.3948048,
          "latitude": 27.3542452,
          "name": null
        },
        {
          "city": "Fresno",
          "country": "United States",
          "state": "California",
          "email": "kasseejohnson@yahoo.com",
          "longitude": -119.7088612608,
          "latitude": 36.7295295,
          "name": "Kassee Johnson"
        },
        {
          "city": "Long Beach",
          "country": "United States",
          "state": "California",
          "email": "mbrown@markbrownconsulting.com",
          "longitude": -118.1916048,
          "latitude": 33.7690164,
          "name": null
        },
        {
          "city": "longitude Beach",
          "country": "United States",
          "state": "California",
          "email": "sford@coalongitudebeach.org",
          "longitude": -118.1916048,
          "latitude": 33.7690164,
          "name": null
        },
        {
          "city": "longitude Beach",
          "country": "United States",
          "state": "California",
          "email": "sumsumdimsum@verizon.net",
          "longitude": -118.1916048,
          "latitude": 33.7690164,
          "name": null
        },
        {
          "city": "longitude Beach",
          "country": "United States",
          "state": "California",
          "email": "wefindfamily@hotmail.com",
          "longitude": -118.1916048,
          "latitude": 33.7690164,
          "name": null
        },
        {
          "city": "longitude Beach",
          "country": "United States",
          "state": "California",
          "email": "bakersue6@gmail.com",
          "longitude": -118.1916048,
          "latitude": 33.7690164,
          "name": null
        },
        {
          "city": "Los Angeles",
          "country": "United States",
          "state": "California",
          "email": "mcmolidor@me.com",
          "longitude": -118.2427666,
          "latitude": 34.0536909,
          "name": null
        },
        {
          "city": "Los Angeles",
          "country": "United States",
          "state": "California",
          "email": "boyerkate@me.com",
          "longitude": -118.2427666,
          "latitude": 34.0536909,
          "name": null
        },
        {
          "city": "Los Angeles",
          "country": "United States",
          "state": "California",
          "email": "salim@salim.cc",
          "longitude": -118.2427666,
          "latitude": 34.0536909,
          "name": null
        },
        {
          "city": "Los Angeles",
          "country": "United States",
          "state": "California",
          "email": "rachelle@inner-cityarts.org",
          "longitude": -118.2427666,
          "latitude": 34.0536909,
          "name": null
        },
        {
          "city": "Los Angeles",
          "country": "United States",
          "state": "California",
          "email": "gina.m.didomenico@lacity.org",
          "longitude": -118.2427666,
          "latitude": 34.0536909,
          "name": null
        },
        {
          "city": "Los Angeles",
          "country": "United States",
          "state": "California",
          "email": "bpack@usc.edu",
          "longitude": -118.2427666,
          "latitude": 34.0536909,
          "name": "Ben Pack"
        },
        {
          "city": "Edison",
          "country": "United States",
          "state": "New Jersey",
          "email": "pamela@malawbu.com",
          "longitude": -74.350679,
          "latitude": 40.577346,
          "name": null
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "alishamerlo@gmail.com",
          "longitude": -121.5157402708,
          "latitude": 38.4817455208,
          "name": "Alisha Merlo"
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "kuangkai@gmail.com",
          "longitude": -117.1627714,
          "latitude": 32.7174209,
          "name": "Kuangkai Tai"
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "marie.c.francis@gmail.com",
          "longitude": -122.4102982,
          "latitude": 37.7768091,
          "name": "Marie Francis"
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "halker.bryan@gmail.com",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": null
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "bryantrobert05@gmail.com",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": null
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "gslangen@sffriendsschool.org",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": null
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "lkessler@salesforce.com",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": null
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "robertsneddenedwards@gmail.com",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": "Rob Edwards"
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "zhenghuihua35@gmail.com",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": null
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "jpc1003@gmail.com",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": null
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "wileywriter@gmail.com",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": null
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "sdsmith@kilpatricktownsend.com",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": "Shelley Smith"
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "casey@cameronhouse.org",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": null
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "adj032008@gmail.com",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": "Alicia Johnson"
        },
        {
          "city": "San Francisco",
          "country": "United States",
          "state": "California",
          "email": "aldo.pascalin@gmail.com",
          "longitude": -122.4192363,
          "latitude": 37.7792808,
          "name": null
        },
        {
          "city": "San Jose",
          "country": "United States",
          "state": "California",
          "email": "gurudatta11@gmail.com",
          "longitude": -121.8905833,
          "latitude": 37.3361905,
          "name": null
        },
        {
          "city": "Los Angeles",
          "country": "United States",
          "state": "California",
          "email": "doctor33@mac.com",
          "longitude": -118.4739521,
          "latitude": 33.9860867,
          "name": null
        },
        {
          "city": "Ventura",
          "country": "United States",
          "state": "California",
          "email": "1laniblue@gmail.com",
          "longitude": -119.2951710105,
          "latitude": 34.343649,
          "name": null
        },
        {
          "city": "Ventura",
          "country": "United States",
          "state": "California",
          "email": "mollyacorbett@gmail.com",
          "longitude": -119.2951710105,
          "latitude": 34.343649,
          "name": null
        },
        {
          "city": "Santa Ana",
          "country": "United States",
          "state": "California",
          "email": "alison@citynet.org",
          "longitude": -117.8732213,
          "latitude": 33.7494951,
          "name": "Ali Mode"
        },
        {
          "city": "Santa Cruz",
          "country": "United States",
          "state": "California",
          "email": "greg@streetsteam.org",
          "longitude": -122.0285259,
          "latitude": 36.9749416,
          "name": "Greg Pensinger"
        },
        {
          "city": "South San Francisco",
          "country": "United States",
          "state": "California",
          "email": "altapuella@gmail.com",
          "longitude": -122.4081251,
          "latitude": 37.6549493,
          "name": "Rose Kitchel"
        },
        {
          "city": "Plankinton",
          "country": "United States",
          "state": "South Dakota",
          "email": "micaela.seiden@gmail.com",
          "longitude": -98.5722461,
          "latitude": 43.6963371,
          "name": null
        },
        {
          "city": "Lexington",
          "country": "United States",
          "state": "Kentucky",
          "email": "justin@utopiaeducation.com",
          "longitude": -84.414393,
          "latitude": 38.015691,
          "name": null
        },
        {
          "city": "Boulder",
          "country": "United States",
          "state": "Colorado",
          "email": "anncooper1025@gmail.com",
          "longitude": -105.2705456,
          "latitude": 40.0149856,
          "name": null
        },
        {
          "city": "Denver",
          "country": "United States",
          "state": "Colorado",
          "email": "nickfalls@gmail.com",
          "longitude": -104.9653271,
          "latitude": 39.7348381,
          "name": null
        },
        {
          "city": "Denver",
          "country": "United States",
          "state": "Colorado",
          "email": "angela.n.grau@gmail.com",
          "longitude": -104.9653271,
          "latitude": 39.7348381,
          "name": null
        },
        {
          "city": "Denver",
          "country": "United States",
          "state": "Colorado",
          "email": "believe.love.serve@gmail.com",
          "longitude": -104.9848623,
          "latitude": 39.7392364,
          "name": null
        },
        {
          "city": "Edison",
          "country": "United States",
          "state": "New Jersey",
          "email": "maggiexmarino52@hotmail.com",
          "longitude": -74.340227,
          "latitude": 40.5927,
          "name": null
        },
        {
          "city": "Denver",
          "country": "United States",
          "state": "Colorado",
          "email": "erin@theimpactfactor.org",
          "longitude": -104.9653271,
          "latitude": 39.7348381,
          "name": null
        },
        {
          "city": "Denver",
          "country": "United States",
          "state": "Colorado",
          "email": "jennbeach.1121@gmail.com",
          "longitude": -104.9653271,
          "latitude": 39.7348381,
          "name": null
        },
        {
          "city": "Daytona Beach",
          "country": "United States",
          "state": "Florida",
          "email": "amythetorch@gmail.com",
          "longitude": -81.0226483,
          "latitude": 29.209288,
          "name": null
        },
        {
          "city": "Destin",
          "country": "United States",
          "state": "Florida",
          "email": "faithkirkland11@aol.com",
          "longitude": -86.4957834,
          "latitude": 30.3935337,
          "name": null
        },
        {
          "city": "Fort Lauderdale",
          "country": "United States",
          "state": "Florida",
          "email": "ladycf22@aol.com",
          "longitude": -80.1433786,
          "latitude": 26.1223084,
          "name": null
        },
        {
          "city": "Fort Lauderdale",
          "country": "United States",
          "state": "Florida",
          "email": "skippingfun@gmail.com",
          "longitude": -80.1433786,
          "latitude": 26.1223084,
          "name": "Lauren Goldman"
        },
        {
          "city": "Fort Lauderdale",
          "country": "United States",
          "state": "Florida",
          "email": "tanyajobrown@gmail.com",
          "longitude": -80.1433786,
          "latitude": 26.1223084,
          "name": null
        },
        {
          "city": "Alhambra",
          "country": "United States",
          "state": "California",
          "email": "junk@greedradio.com",
          "longitude": -118.1536969,
          "latitude": 34.0676331,
          "name": "SCOtty Klause"
        },
        {
          "city": "Athens",
          "country": "United States",
          "state": "Georgia",
          "email": "sammielynchristensen@gmail.com",
          "longitude": -83.376398,
          "latitude": 33.9597677,
          "name": null
        },
        {
          "city": "Athens",
          "country": "United States",
          "state": "Georgia",
          "email": "laurensteffes@gmail.com",
          "longitude": -83.376398,
          "latitude": 33.9597677,
          "name": null
        },
        {
          "city": "Atlanta",
          "country": "United States",
          "state": "Georgia",
          "email": "cameron.markham@turner.com",
          "longitude": -84.3901849,
          "latitude": 33.7490987,
          "name": null
        }
      ]);
    });
};
