
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('partners')
    .then(function () {
      // Inserts seed entries
      return knex('partners').insert([
        {
          "city": "Atlanta",
          "country": "United States",
          "state": "Georgia",
          "email": "hunterjo28@gmail.com",
          "longitude": -84.3901849,
          "latitude": 33.7490987,
          "password": "password",
          "name": "Hunter Johnson"
        },
        {
          "city": "Augusta",
          "country": "United States",
          "state": "Georgia",
          "email": "brandi.feemster@gmail.com",
          "longitude": -81.9748429,
          "latitude": 33.4709714,
          "password": "password",
          "name": null
        },
        {
          "city": "Chickamauga",
          "country": "United States",
          "state": "Georgia",
          "email": "taylormorgan652@gmail.com",
          "longitude": -85.2902472,
          "latitude": 34.8711497,
          "password": "password",
          "name": null
        },
        {
          "city": "Honolulu",
          "country": "United States",
          "state": "Hawaii",
          "email": "willmill89@gmail.com",
          "longitude": -157.8556764,
          "latitude": 21.304547,
          "password": "password",
          "name": null
        },
        {
          "city": "Kailua",
          "country": "United States",
          "state": "Hawaii",
          "email": "roxendine93@gmail.com",
          "longitude": -155.996933,
          "latitude": 19.641941,
          "password": "password",
          "name": null
        },
        {
          "city": "Lahaina",
          "country": "United States",
          "state": "Hawaii",
          "email": "di3gzx@gmail.com",
          "longitude": -156.6762729,
          "latitude": 20.872684,
          "password": "password",
          "name": null
        },
        {
          "city": "Des Moines",
          "country": "United States",
          "state": "Iowa",
          "email": "changesoon211@yahoo.com",
          "longitude": -93.6037149,
          "latitude": 41.5910641,
          "password": "password",
          "name": null
        },
        {
          "city": "Boise",
          "country": "United States",
          "state": "Idaho",
          "email": "cch.servicescoordinator@gmail.com",
          "longitude": -116.200835,
          "latitude": 43.61656,
          "password": "password",
          "name": null
        },
        {
          "city": "Carrier Mills",
          "country": "United States",
          "state": "Illinois",
          "email": "starsclapprogram@gmail.com",
          "longitude": -88.6328326,
          "latitude": 37.6842156,
          "password": "password",
          "name": null
        },
        {
          "city": "Union",
          "country": "United States",
          "state": "New Jersey",
          "email": "karla.saavedrab@gmail.com",
          "longitude": -74.287371,
          "latitude": 40.718347,
          "password": "password",
          "name": null
        },
        {
          "city": "Chicago",
          "country": "United States",
          "state": "Illinois",
          "email": "allie.szcz@gmail.com",
          "longitude": -87.6244212,
          "latitude": 41.8755616,
          "password": "password",
          "name": null
        },
        {
          "city": "Chicago",
          "country": "United States",
          "state": "Illinois",
          "email": "gettingfreeinjc@gmail.com",
          "longitude": -87.6244212,
          "latitude": 41.8755616,
          "password": "password",
          "name": null
        },
        {
          "city": "Chicago",
          "country": "United States",
          "state": "Illinois",
          "email": "sheilatapia1@gmail.com",
          "longitude": -87.6244212,
          "latitude": 41.8755616,
          "password": "password",
          "name": null
        },
        {
          "city": "Chicago",
          "country": "United States",
          "state": "Illinois",
          "email": "tomas.echeverri11@gmail.com",
          "longitude": -87.6244212,
          "latitude": 41.8755616,
          "password": "password",
          "name": null
        },
        {
          "city": "Chicago",
          "country": "United States",
          "state": "Illinois",
          "email": "dhostetler@anb.today",
          "longitude": -87.6244212,
          "latitude": 41.8755616,
          "password": "password",
          "name": null
        },
        {
          "city": "Chicago",
          "country": "United States",
          "state": "Illinois",
          "email": "christopherlcalalangperfect@gmail.com",
          "longitude": -87.6244212,
          "latitude": 41.8755616,
          "password": "password",
          "name": "Christopher Mortola Sugay Lim Calalang"
        },
        {
          "city": "Crest Hill",
          "country": "United States",
          "state": "Illinois",
          "email": "troat17@yahoo.com",
          "longitude": -88.0986709,
          "latitude": 41.554753,
          "password": "password",
          "name": "Terry Roat"
        },
        {
          "city": "Chicago",
          "country": "United States",
          "state": "Illinois",
          "email": "tumurhenry@gmail.com",
          "longitude": -87.6244212,
          "latitude": 41.8755616,
          "password": "password",
          "name": "Henry Tumurbaatar"
        },
        {
          "city": "Evansville",
          "country": "United States",
          "state": "Indiana",
          "email": "abarnettdevries@gmail.com",
          "longitude": -87.5558483,
          "latitude": 37.9747645,
          "password": "password",
          "name": null
        },
        {
          "city": "Canton",
          "country": "United States",
          "state": "Missouri",
          "email": "wedel_3@yahoo.com",
          "longitude": -91.5205242,
          "latitude": 40.132926,
          "password": "password",
          "name": "Heidi Wedel"
        },
        {
          "city": "Louisville",
          "country": "United States",
          "state": "Kentucky",
          "email": "spring@sunstrands.com",
          "longitude": -85.759407,
          "latitude": 38.2542376,
          "password": "password",
          "name": null
        },
        {
          "city": "Houma",
          "country": "United States",
          "state": "Louisiana",
          "email": "paigesevin@gmail.com",
          "longitude": -90.7195348,
          "latitude": 29.5957696,
          "password": "password",
          "name": "Paige Sevin"
        },
        {
          "city": "Boston",
          "country": "United States",
          "state": "Massachusetts",
          "email": "dmcdevittcare@gmail.com",
          "longitude": -71.0582912,
          "latitude": 42.3602534,
          "password": "password",
          "name": null
        },
        {
          "city": "Newark",
          "country": "United States",
          "state": "New Jersey",
          "email": "abhishek.raman87@gmail.com",
          "longitude": -74.1843736,
          "latitude": 40.7378154,
          "password": "password",
          "name": null
        },
        {
          "city": "Irvine",
          "country": "United States",
          "state": "California",
          "email": "sonjazone@hotmail.com",
          "longitude": -117.7757133,
          "latitude": 33.696779,
          "password": "password",
          "name": null
        },
        {
          "city": "Linden",
          "country": "United States",
          "state": "New Jersey",
          "email": "nfiora1@students.towson.edu",
          "longitude": -74.250917,
          "latitude": 40.644449,
          "password": "password",
          "name": null
        },
        {
          "city": "Bangor",
          "country": "United States",
          "state": "Maine",
          "email": "tjlm301@gmail.com",
          "longitude": -68.7778138,
          "latitude": 44.8011821,
          "password": "password",
          "name": null
        },
        {
          "city": "Ann Arbor",
          "country": "United States",
          "state": "Michigan",
          "email": "amirza@umich.edu",
          "longitude": -83.7312291,
          "latitude": 42.2681569,
          "password": "password",
          "name": null
        },
        {
          "city": "Detroit",
          "country": "United States",
          "state": "Michigan",
          "email": "dkaltz@gmail.com",
          "longitude": -83.0466403,
          "latitude": 42.3315509,
          "password": "password",
          "name": "Danielle Kaltz"
        },
        {
          "city": "Grand Rapids",
          "country": "United States",
          "state": "Michigan",
          "email": "herm.degroot@gmail.com",
          "longitude": -85.6678639,
          "latitude": 42.9632405,
          "password": "password",
          "name": null
        },
        {
          "city": "Grand Rapids",
          "country": "United States",
          "state": "Michigan",
          "email": "melissa.grasman@gmail.com",
          "longitude": -85.533004,
          "latitude": 42.9142413,
          "password": "password",
          "name": null
        },
        {
          "city": "Minneapolis",
          "country": "United States",
          "state": "Minnesota",
          "email": "pattypatty@gmail.com",
          "longitude": -93.3443585,
          "latitude": 45.1004807,
          "password": "password",
          "name": null
        },
        {
          "city": "Branson",
          "country": "United States",
          "state": "Colorado",
          "email": "kdfisher1212@gmail.com",
          "longitude": -103.8844083,
          "latitude": 37.0175227,
          "password": "password",
          "name": null
        },
        {
          "city": "Bozeman",
          "country": "United States",
          "state": "Montana",
          "email": "thorn@thehrdc.org",
          "longitude": -111.044675,
          "latitude": 45.679984,
          "password": "password",
          "name": null
        },
        {
          "city": "Lebanon",
          "country": "United States",
          "state": "Tennessee",
          "email": "dawnsantana@ymail.com",
          "longitude": -86.2910945,
          "latitude": 36.2079779,
          "password": "password",
          "name": null
        },
        {
          "city": "Greensboro",
          "country": "United States",
          "state": "North Carolina",
          "email": "anne-marie.green@greensboro.edu",
          "longitude": -79.7251586,
          "latitude": 36.0867546,
          "password": "password",
          "name": null
        },
        {
          "city": "Charlotte",
          "country": "United States",
          "state": "North Carolina",
          "email": "auguste7777@yahoo.com",
          "longitude": -80.8431268,
          "latitude": 35.2270869,
          "password": "password",
          "name": null
        },
        {
          "city": "Charlotte Hall",
          "country": "United States",
          "state": "Maryland",
          "email": "coleshauna@icloud.com",
          "longitude": -76.778022,
          "latitude": 38.4809565,
          "password": "password",
          "name": null
        },
        {
          "city": "Irvine",
          "country": "United States",
          "state": "California",
          "email": "horeshtr@gmail.com",
          "longitude": -117.8060501,
          "latitude": 33.6461908,
          "password": "password",
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "New York",
          "email": "cloehymowitz@gmail.com",
          "longitude": -74.1723608,
          "latitude": 42.3995257,
          "password": "password",
          "name": null
        },
        {
          "city": "Reno",
          "country": "United States",
          "state": "Nevada",
          "email": "monica.nyep@gmail.com",
          "longitude": -119.8136744,
          "latitude": 39.52927,
          "password": "password",
          "name": "Monica DuPea"
        },
        {
          "city": "South Orange",
          "country": "United States",
          "state": "New Jersey",
          "email": "hannah.baker1@student.shu.edu",
          "longitude": -74.2635376,
          "latitude": 40.7474966,
          "password": "password",
          "name": "Hannah Baker"
        },
        {
          "city": "Dover",
          "country": "United States",
          "state": "New Hampshire",
          "email": "jo-el@myself.com",
          "longitude": -70.8739158,
          "latitude": 43.198057,
          "password": "password",
          "name": null
        },
        {
          "city": "Camden",
          "country": "United States",
          "state": "New Jersey",
          "email": "kbenjamin666@gmail.com",
          "longitude": -75.1198911,
          "latitude": 39.9448402,
          "password": "password",
          "name": "Katrina Benjamin"
        },
        {
          "city": "Jersey City",
          "country": "United States",
          "state": "New Jersey",
          "email": "onceuponapriori@gmail.com",
          "longitude": -74.0776417,
          "latitude": 40.7281575,
          "password": "password",
          "name": null
        },
        {
          "city": "Camden",
          "country": "United States",
          "state": "New Jersey",
          "email": "lbrownbartlett@yahoo.com",
          "longitude": -75.1286111386,
          "latitude": 39.9528499,
          "password": "password",
          "name": null
        },
        {
          "city": "Albuquerque",
          "country": "United States",
          "state": "New Mexico",
          "email": "drzhongyao@gmail.com",
          "longitude": -106.6509851,
          "latitude": 35.0841034,
          "password": "password",
          "name": null
        },
        {
          "city": "Albuquerque",
          "country": "United States",
          "state": "New Mexico",
          "email": "reuben_luther@yahoo.com",
          "longitude": -106.6509851,
          "latitude": 35.0841034,
          "password": "password",
          "name": null
        },
        {
          "city": "Albuquerque",
          "country": "United States",
          "state": "New Mexico",
          "email": "aostlie1@gmail.com",
          "longitude": -106.6509851,
          "latitude": 35.0841034,
          "password": "password",
          "name": "Amy Ostlie"
        },
        {
          "city": "Albuquerque",
          "country": "United States",
          "state": "New Mexico",
          "email": "jecoryell@gmail.com",
          "longitude": -106.6509851,
          "latitude": 35.0841034,
          "password": "password",
          "name": null
        },
        {
          "city": "Artesia",
          "country": "United States",
          "state": "New Mexico",
          "email": "bayleemckinney@yahoo.com",
          "longitude": -104.4032963,
          "latitude": 32.8423345,
          "password": "password",
          "name": null
        },
        {
          "city": "Las Vegas",
          "country": "United States",
          "state": "Nevada",
          "email": "angelarosemoretti@yahoo.com",
          "longitude": -115.149225,
          "latitude": 36.1662859,
          "password": "password",
          "name": null
        },
        {
          "city": "Las Vegas",
          "country": "United States",
          "state": "Nevada",
          "email": "nhuynh10@gmail.com",
          "longitude": -115.149225,
          "latitude": 36.1662859,
          "password": "password",
          "name": null
        },
        {
          "city": "Las Vegas",
          "country": "United States",
          "state": "Nevada",
          "email": "breann.dow@gmail.com",
          "longitude": -115.149225,
          "latitude": 36.1662859,
          "password": "password",
          "name": null
        },
        {
          "city": "Las Vegas",
          "country": "United States",
          "state": "Nevada",
          "email": "agale@journalist.com",
          "longitude": -115.149225,
          "latitude": 36.1662859,
          "password": "password",
          "name": null
        },
        {
          "city": "Henderson",
          "country": "United States",
          "state": "Nevada",
          "email": "lisah34@gmail.com",
          "longitude": -115.006381,
          "latitude": 36.0077547,
          "password": "password",
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "New York",
          "email": "ahorn@bklynlibrary.org",
          "longitude": -73.9495823,
          "latitude": 40.6501038,
          "password": "password",
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "New York",
          "email": "ana@surewecan.org",
          "longitude": -73.9495823,
          "latitude": 40.6501038,
          "password": "password",
          "name": null
        },
        {
          "city": "Buffalo",
          "country": "United States",
          "state": "New York",
          "email": "bclee@buffalo.edu",
          "longitude": -78.8783922,
          "latitude": 42.8867166,
          "password": "password",
          "name": null
        },
        {
          "city": "Croton-on-Hudson",
          "country": "United States",
          "state": "New York",
          "email": "houndhugs@gmail.com",
          "longitude": -73.8825512625,
          "latitude": 41.18989085,
          "password": "password",
          "name": null
        },
        {
          "city": "Centereach",
          "country": "United States",
          "state": "New York",
          "email": "bernadettem1912@gmail.com",
          "longitude": -73.099218822,
          "latitude": 40.85172235,
          "password": "password",
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "kathiealli3@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "password": "password",
          "name": "Kathie Alli"
        },
        {
          "city": "Cincinnati",
          "country": "United States",
          "state": "Ohio",
          "email": "koknatga@mail.uc.edu",
          "longitude": -84.5124602,
          "latitude": 39.1014537,
          "password": "password",
          "name": "Gabrielle Koknat"
        },
        {
          "city": "Cleveland",
          "country": "United States",
          "state": "Ohio",
          "email": "laurenvitas1221@gmail.com",
          "longitude": -81.6934446,
          "latitude": 41.5051613,
          "password": "password",
          "name": null
        },
        {
          "city": "Newark",
          "country": "United States",
          "state": "New Jersey",
          "email": "mschubert@montessorihighschool.org",
          "longitude": -74.236097,
          "latitude": 40.737353,
          "password": "password",
          "name": null
        },
        {
          "city": "Ithaca",
          "country": "United States",
          "state": "Michigan",
          "email": "1letsgolearn@gmail.com",
          "longitude": -84.7069492,
          "latitude": 43.2922543,
          "password": "password",
          "name": null
        },
        {
          "city": "Portland",
          "country": "United States",
          "state": "Oregon",
          "email": "lucasriley521@gmail.com",
          "longitude": -122.6741949,
          "latitude": 45.5202471,
          "password": "password",
          "name": "Lucas Seiji"
        },
        {
          "city": "Camden",
          "country": "United States",
          "state": "New Jersey",
          "email": "jmkconsult@mac.com",
          "longitude": -75.1214636735,
          "latitude": 39.9529874286,
          "password": "password",
          "name": "Julie Krohner"
        },
        {
          "city": "Philadelphia",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "rl.morgan09@gmail.com",
          "longitude": -75.1635262,
          "latitude": 39.9527237,
          "password": "password",
          "name": null
        },
        {
          "city": "Philadelphia",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "wahmbrendamarie@gmail.com",
          "longitude": -75.1635262,
          "latitude": 39.9527237,
          "password": "password",
          "name": null
        },
        {
          "city": "Philadelphia",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "mollyschenker@gmail.com",
          "longitude": -75.1635262,
          "latitude": 39.9527237,
          "password": "password",
          "name": "Molly Schenker"
        },
        {
          "city": "Philadelphia",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "devinfox1985@icloud.com",
          "longitude": -75.1635262,
          "latitude": 39.9527237,
          "password": "password",
          "name": "Devin Fox"
        },
        {
          "city": "Glocester",
          "country": "United States",
          "state": "Rhode Island",
          "email": "rsylvia@crossroadsri.org",
          "longitude": -71.5814834,
          "latitude": 41.8677428,
          "password": "password",
          "name": "Rachel Sylvia"
        },
        {
          "city": "Charleston",
          "country": "United States",
          "state": "South Carolina",
          "email": "victoriamort73@gmail.com",
          "longitude": -79.9402728,
          "latitude": 32.7876012,
          "password": "password",
          "name": null
        },
        {
          "city": "Columbia",
          "country": "United States",
          "state": "South Carolina",
          "email": "jbrown611@gmail.com",
          "longitude": -81.0343313,
          "latitude": 34.0007493,
          "password": "password",
          "name": null
        },
        {
          "city": "Morristown",
          "country": "United States",
          "state": "New Jersey",
          "email": "david@nalleypi.com",
          "longitude": -74.454163,
          "latitude": 40.781725,
          "password": "password",
          "name": null
        },
        {
          "city": "Westlake Village",
          "country": "United States",
          "state": "California",
          "email": "jimgray2005@gmail.com",
          "longitude": -118.8384287466,
          "latitude": 34.1519374599,
          "password": "password",
          "name": "James Gray"
        },
        {
          "city": "Abilene",
          "country": "United States",
          "state": "Texas",
          "email": "john@abilenehopehaven.org",
          "longitude": -99.7333011,
          "latitude": 32.4466741,
          "password": "password",
          "name": null
        },
        {
          "city": "Amarillo",
          "country": "United States",
          "state": "Texas",
          "email": "maschulen@gmail.com",
          "longitude": -101.8338246,
          "latitude": 35.2072185,
          "password": "password",
          "name": null
        },
        {
          "city": "Amarillo",
          "country": "United States",
          "state": "Texas",
          "email": "leeholt1022@gmail.com",
          "longitude": -101.8338246,
          "latitude": 35.2072185,
          "password": "password",
          "name": null
        },
        {
          "city": "Kearny",
          "country": "United States",
          "state": "New Jersey",
          "email": "cabella61@gmail.com",
          "longitude": -74.138199,
          "latitude": 40.7776008,
          "password": "password",
          "name": null
        },
        {
          "city": "Austin",
          "country": "United States",
          "state": "Texas",
          "email": "nikki73gonzales@yahoo.com",
          "longitude": -97.7436995,
          "latitude": 30.2711286,
          "password": "password",
          "name": "Nikki Gonzales"
        },
        {
          "city": "Austin",
          "country": "United States",
          "state": "Texas",
          "email": "khabercro@gmail.com",
          "longitude": -97.7436995,
          "latitude": 30.2711286,
          "password": "password",
          "name": null
        },
        {
          "city": "Austin",
          "country": "United States",
          "state": "Texas",
          "email": "vemason81@yahoo.com",
          "longitude": -97.7436995,
          "latitude": 30.2711286,
          "password": "password",
          "name": null
        },
        {
          "city": "Austin",
          "country": "United States",
          "state": "Texas",
          "email": "joedavidchavez@gmail.com",
          "longitude": -97.7436995,
          "latitude": 30.2711286,
          "password": "password",
          "name": null
        },
        {
          "city": "Newark",
          "country": "United States",
          "state": "New Jersey",
          "email": "jillianlayne@hotmail.com",
          "longitude": -74.178452,
          "latitude": 40.722857,
          "password": "password",
          "name": null
        },
        {
          "city": "Austin",
          "country": "United States",
          "state": "Texas",
          "email": "katierose@austinecho.org",
          "longitude": -97.7436995,
          "latitude": 30.2711286,
          "password": "password",
          "name": "Katie Rose"
        },
        {
          "city": "Bastrop",
          "country": "United States",
          "state": "Texas",
          "email": "mbrandon@bisdtx.org",
          "longitude": -97.3152701,
          "latitude": 30.1104947,
          "password": "password",
          "name": null
        },
        {
          "city": "Beckville",
          "country": "United States",
          "state": "Texas",
          "email": "kristinsaintignan@gmail.com",
          "longitude": -94.4554782,
          "latitude": 32.2429366,
          "password": "password",
          "name": null
        },
        {
          "city": "Brownsville",
          "country": "United States",
          "state": "Texas",
          "email": "carlos3706@sbcglobal.net",
          "longitude": -97.4890856,
          "latitude": 25.9140256,
          "password": "password",
          "name": null
        },
        {
          "city": "Dallas",
          "country": "United States",
          "state": "Texas",
          "email": "cheri@cornbreadhustle.com",
          "longitude": -96.7968559,
          "latitude": 32.7762719,
          "password": "password",
          "name": null
        },
        {
          "city": "Dallas",
          "country": "United States",
          "state": "Texas",
          "email": "house0fgrace@yahoo.com",
          "longitude": -96.7968559,
          "latitude": 32.7762719,
          "password": "password",
          "name": null
        },
        {
          "city": "Dallas",
          "country": "United States",
          "state": "Texas",
          "email": "catrinac21@gmail.com",
          "longitude": -96.7968559,
          "latitude": 32.7762719,
          "password": "password",
          "name": "Catrina Crain"
        },
        {
          "city": "Fort Worth",
          "country": "United States",
          "state": "Texas",
          "email": "cashpope3@gmail.com",
          "longitude": -97.1735626,
          "latitude": 32.7599075,
          "password": "password",
          "name": null
        },
        {
          "city": "El Paso",
          "country": "United States",
          "state": "Texas",
          "email": "danrubio69@gmail.com",
          "longitude": -106.487287,
          "latitude": 31.7600372,
          "password": "password",
          "name": null
        },
        {
          "city": "Fort Worth",
          "country": "United States",
          "state": "Texas",
          "email": "shogunbydesign@gmail.com",
          "longitude": -97.3327459,
          "latitude": 32.753177,
          "password": "password",
          "name": null
        },
        {
          "city": "Houston",
          "country": "United States",
          "state": "Texas",
          "email": "aliceyet21@gmail.com",
          "longitude": -95.3676974,
          "latitude": 29.7589382,
          "password": "password",
          "name": null
        },
        {
          "city": "Houston",
          "country": "United States",
          "state": "Texas",
          "email": "llevy@searchhomeless.org",
          "longitude": -95.3676974,
          "latitude": 29.7589382,
          "password": "password",
          "name": null
        },
        {
          "city": "Houston",
          "country": "United States",
          "state": "Texas",
          "email": "andrea.piro@bcm.edu",
          "longitude": -95.3676974,
          "latitude": 29.7589382,
          "password": "password",
          "name": null
        },
        {
          "city": "Houston",
          "country": "United States",
          "state": "Texas",
          "email": "triciacrcw@outlook.com",
          "longitude": -95.3676974,
          "latitude": 29.7589382,
          "password": "password",
          "name": null
        },
        {
          "city": "Cypress",
          "country": "United States",
          "state": "Texas",
          "email": "kaylynnsills@gmail.com",
          "longitude": -95.6820983,
          "latitude": 29.9431649,
          "password": "password",
          "name": "Kaylynn Sills"
        },
        {
          "city": "Clinton",
          "country": "United States",
          "state": "Maryland",
          "email": "nrichardsstone66@gmail.com",
          "longitude": -76.8930136,
          "latitude": 38.784414,
          "password": "password",
          "name": null
        },
        {
          "city": "Fairfax",
          "country": "United States",
          "state": "Virginia",
          "email": "andy.kim.22@gmail.com",
          "longitude": -77.3063733,
          "latitude": 38.8462236,
          "password": "password",
          "name": null
        },
        {
          "city": "Lynchburg",
          "country": "United States",
          "state": "Virginia",
          "email": "whitneywoodmusic@gmail.com",
          "longitude": -79.1844923946,
          "latitude": 37.40088,
          "password": "password",
          "name": null
        },
        {
          "city": "Burlington",
          "country": "United States",
          "state": "Vermont",
          "email": "dian.firebearer@gmail.com",
          "longitude": -73.2135472,
          "latitude": 44.4762975,
          "password": "password",
          "name": null
        },
        {
          "city": "Buckley",
          "country": "United States",
          "state": "Washington",
          "email": "courtneyhultenberg22@gmail.com",
          "longitude": -122.027746,
          "latitude": 47.1622483,
          "password": "password",
          "name": null
        },
        {
          "city": "Brewton",
          "country": "United States",
          "state": "Alabama",
          "email": "leifericolsen@gmail.com",
          "longitude": -87.1213622,
          "latitude": 31.2210066,
          "password": "password",
          "name": null
        }
      ]);
    });
};
