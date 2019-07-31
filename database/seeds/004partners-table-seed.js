
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('partners')
    .then(function () {
      // Inserts seed entries
      return knex('partners').insert([
        {
          "city": "Richmond",
          "country": "United States",
          "state": "Virginia",
          "email": "caroline@worthdays.org",
          "longitude": -77.43428,
          "latitude": 37.5385087,
          "password": "password",
          "name": null
        },
        {
          "city": "Richmond",
          "country": "United States",
          "state": "Virginia",
          "email": "mejis1067@gmail.com",
          "longitude": -77.43428,
          "latitude": 37.5385087,
          "password": "password",
          "name": null
        },
        {
          "city": "Rochester",
          "country": "United States",
          "state": "New York",
          "email": "info@jmaxmedia.com",
          "longitude": -77.615214,
          "latitude": 43.157285,
          "password": "password",
          "name": null
        },
        {
          "city": "Eldon",
          "country": "United States",
          "state": "Missouri",
          "email": "shannonkeitel@yahoo.com",
          "longitude": -92.6692515,
          "latitude": 38.3277052,
          "password": "password",
          "name": null
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "rmetzker@pacbell.net",
          "longitude": -121.4943996,
          "latitude": 38.5815719,
          "password": "password",
          "name": null
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "marjar85@gmail.com",
          "longitude": -121.4943996,
          "latitude": 38.5815719,
          "password": "password",
          "name": null
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "jp@aboutnewlife.com",
          "longitude": -121.4943996,
          "latitude": 38.5815719,
          "password": "password",
          "name": null
        },
        {
          "city": "Ventnor City",
          "country": "United States",
          "state": "New Jersey",
          "email": "melissadbrolland@gmail.com",
          "longitude": -74.483242,
          "latitude": 39.341244,
          "password": "password",
          "name": null
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "casooner@hotmail.com",
          "longitude": -121.4943996,
          "latitude": 38.5815719,
          "password": "password",
          "name": "Angela Taylor"
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "missy_may@ymail.com",
          "longitude": -121.4943996,
          "latitude": 38.5815719,
          "password": "password",
          "name": null
        },
        {
          "city": "Salt Lake City",
          "country": "United States",
          "state": "Utah",
          "email": "jzemp@crowchild.com",
          "longitude": -111.8904308,
          "latitude": 40.7670126,
          "password": "password",
          "name": null
        },
        {
          "city": "Salt Lake City",
          "country": "United States",
          "state": "Utah",
          "email": "sendys.estevez@gmail.com",
          "longitude": -111.8904308,
          "latitude": 40.7670126,
          "password": "password",
          "name": null
        },
        {
          "city": "Salt Lake City",
          "country": "United States",
          "state": "Utah",
          "email": "goldenstairs@gmail.com",
          "longitude": -111.8904308,
          "latitude": 40.7670126,
          "password": "password",
          "name": "Charity Judkins"
        },
        {
          "city": "Salt Lake City",
          "country": "United States",
          "state": "Utah",
          "email": "lizzyk55@gmail.com",
          "longitude": -111.8904308,
          "latitude": 40.7670126,
          "password": "password",
          "name": "Liz Knowles"
        },
        {
          "city": "Salt Lake City",
          "country": "United States",
          "state": "Utah",
          "email": "sarah.franklin9@gmail.com",
          "longitude": -111.8904308,
          "latitude": 40.7670126,
          "password": "password",
          "name": null
        },
        {
          "city": "San Antonio",
          "country": "United States",
          "state": "Texas",
          "email": "garner2457@gmail.com",
          "longitude": -98.4951405,
          "latitude": 29.4246002,
          "password": "password",
          "name": null
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "john@styn.net",
          "longitude": -117.1627714,
          "latitude": 32.7174209,
          "password": "password",
          "name": null
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "justinseid@gmail.com",
          "longitude": -117.1627714,
          "latitude": 32.7174209,
          "password": "password",
          "name": null
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "kim@ramonatownradio.com",
          "longitude": -117.1627714,
          "latitude": 32.7174209,
          "password": "password",
          "name": "Kimberly Kelly"
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "jalldredge23@gmail.com",
          "longitude": -117.1627714,
          "latitude": 32.7174209,
          "password": "password",
          "name": "Julia Alldredge"
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "landholmr@gmail.com",
          "longitude": -117.1627714,
          "latitude": 32.7174209,
          "password": "password",
          "name": "Robin Landholm"
        },
        {
          "city": "San Luis Obispo",
          "country": "United States",
          "state": "California",
          "email": "amyarm@ucla.edu",
          "longitude": -120.6596156,
          "latitude": 35.2827525,
          "password": "password",
          "name": null
        },
        {
          "city": "Santa Barbara",
          "country": "United States",
          "state": "California",
          "email": "erin@oceanhills.org",
          "longitude": -119.7026673,
          "latitude": 34.4221319,
          "password": "password",
          "name": null
        },
        {
          "city": "Santa Fe",
          "country": "United States",
          "state": "New Mexico",
          "email": "tbsosinski@gmail.com",
          "longitude": -105.9377997,
          "latitude": 35.6869996,
          "password": "password",
          "name": null
        },
        {
          "city": "Santee",
          "country": "United States",
          "state": "California",
          "email": "billchristinagates@gmail.com",
          "longitude": -116.9739167,
          "latitude": 32.8383828,
          "password": "password",
          "name": null
        },
        {
          "city": "Sarasota",
          "country": "United States",
          "state": "Florida",
          "email": "scottkristianna@gmail.com",
          "longitude": -82.5306527,
          "latitude": 27.3364347,
          "password": "password",
          "name": "Kristianna Scott"
        },
        {
          "city": "Sausalito",
          "country": "United States",
          "state": "California",
          "email": "erin.vanliemt@gmail.com",
          "longitude": -122.4854694,
          "latitude": 37.8590272,
          "password": "password",
          "name": "Erin van Liemt"
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "jake.tozier@gmail.com",
          "longitude": -122.3300624,
          "latitude": 47.6038321,
          "password": "password",
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "bailey.hults@gmail.com",
          "longitude": -122.3300624,
          "latitude": 47.6038321,
          "password": "password",
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "smyers969@hotmail.com",
          "longitude": -122.3300624,
          "latitude": 47.6038321,
          "password": "password",
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "alexa.moncrief@gmail.com",
          "longitude": -122.3300624,
          "latitude": 47.6038321,
          "password": "password",
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "matthew.t.adkins@gmail.com",
          "longitude": -122.3300624,
          "latitude": 47.6038321,
          "password": "password",
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "reply2monica@yahoo.com",
          "longitude": -122.3300624,
          "latitude": 47.6038321,
          "password": "password",
          "name": null
        },
        {
          "city": "Shreveport",
          "country": "United States",
          "state": "Louisiana",
          "email": "mfkhan@uh.edu",
          "longitude": -93.7651944,
          "latitude": 32.5221828,
          "password": "password",
          "name": null
        },
        {
          "city": "Shreveport",
          "country": "United States",
          "state": "Louisiana",
          "email": "michaelsbillings@gmail.com",
          "longitude": -93.7651944,
          "latitude": 32.5221828,
          "password": "password",
          "name": "MIchael Billings"
        },
        {
          "city": "Sisters",
          "country": "United States",
          "state": "Oregon",
          "email": "lassenbutterfly@gmail.com",
          "longitude": -121.5492516,
          "latitude": 44.290948,
          "password": "password",
          "name": null
        },
        {
          "city": "Windsor",
          "country": "United States",
          "state": "California",
          "email": "heidi.taskforce@gmail.com",
          "longitude": -122.8473388,
          "latitude": 38.5110803,
          "password": "password",
          "name": null
        },
        {
          "city": "South Bend",
          "country": "United States",
          "state": "Indiana",
          "email": "tracyleliaert@gmail.com",
          "longitude": -86.2500066,
          "latitude": 41.6833813,
          "password": "password",
          "name": null
        },
        {
          "city": "Spokane",
          "country": "United States",
          "state": "Washington",
          "email": "gsftagivesback@gmail.com",
          "longitude": -117.4212265,
          "latitude": 47.6579425,
          "password": "password",
          "name": null
        },
        {
          "city": "Springfield",
          "country": "United States",
          "state": "Massachusetts",
          "email": "travissayomwilliams@gmail.com",
          "longitude": -72.589811,
          "latitude": 42.1014831,
          "password": "password",
          "name": null
        },
        {
          "city": "St. Louis",
          "country": "United States",
          "state": "Missouri",
          "email": "bgclick@gmail.com",
          "longitude": -90.1994097,
          "latitude": 38.6268039,
          "password": "password",
          "name": null
        },
        {
          "city": "Chesterfield",
          "country": "United States",
          "state": "Missouri",
          "email": "julienne.shin@gmail.com",
          "longitude": -90.518812775,
          "latitude": 38.6398744,
          "password": "password",
          "name": null
        },
        {
          "city": "St. Petersburg",
          "country": "United States",
          "state": "Florida",
          "email": "giselealucia@gmail.com",
          "longitude": -82.6695085,
          "latitude": 27.7703796,
          "password": "password",
          "name": null
        },
        {
          "city": "St. George",
          "country": "United States",
          "state": "Utah",
          "email": "hailhydra187@gmail.com",
          "longitude": -113.5841313,
          "latitude": 37.104153,
          "password": "password",
          "name": null
        },
        {
          "city": "Stafford Township",
          "country": "United States",
          "state": "New Jersey",
          "email": "ah1stcu@gmail.com",
          "longitude": -74.2779616,
          "latitude": 39.7114651,
          "password": "password",
          "name": null
        },
        {
          "city": "Stamford",
          "country": "United States",
          "state": "Connecticut",
          "email": "abarer@pacifichouse.org",
          "longitude": -73.5387341,
          "latitude": 41.0534302,
          "password": "password",
          "name": null
        },
        {
          "city": "Suisun City",
          "country": "United States",
          "state": "California",
          "email": "mherbison@sbcglobal.net",
          "longitude": -122.040244,
          "latitude": 38.2382474,
          "password": "password",
          "name": null
        },
        {
          "city": "Sunnyvale",
          "country": "United States",
          "state": "California",
          "email": "shickok@sunnyvale.ca.gov",
          "longitude": -122.0363496,
          "latitude": 37.3688301,
          "password": "password",
          "name": null
        },
        {
          "city": "Sunnyvale",
          "country": "United States",
          "state": "California",
          "email": "emilydoanx@gmail.com",
          "longitude": -122.0363496,
          "latitude": 37.3688301,
          "password": "password",
          "name": null
        },
        {
          "city": "Los Angeles",
          "country": "United States",
          "state": "California",
          "email": "marissanmorales@yahoo.com",
          "longitude": -118.4492148,
          "latitude": 34.3076252,
          "password": "password",
          "name": "Marissa Morales"
        },
        {
          "city": "Syracuse",
          "country": "United States",
          "state": "New York",
          "email": "cjr8006@yahoo.com",
          "longitude": -76.1474244,
          "latitude": 43.0481221,
          "password": "password",
          "name": "Chris Rossi"
        },
        {
          "city": "Tacoma",
          "country": "United States",
          "state": "Washington",
          "email": "tehraven@gmail.com",
          "longitude": -122.4398746,
          "latitude": 47.2495798,
          "password": "password",
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "Florida",
          "email": "james@homelesslivesmatter.org",
          "longitude": -82.5723193,
          "latitude": 27.6886419,
          "password": "password",
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "Florida",
          "email": "info@outpostforhope.org",
          "longitude": -82.5723193,
          "latitude": 27.6886419,
          "password": "password",
          "name": null
        },
        {
          "city": "Tampa",
          "country": "United States",
          "state": "Florida",
          "email": "iurquilla92@gmail.com",
          "longitude": -82.458444,
          "latitude": 27.9477595,
          "password": "password",
          "name": null
        },
        {
          "city": "Tampa",
          "country": "United States",
          "state": "Florida",
          "email": "matthew132@mail.usf.edu",
          "longitude": -82.458444,
          "latitude": 27.9477595,
          "password": "password",
          "name": null
        },
        {
          "city": "Tampa",
          "country": "United States",
          "state": "Florida",
          "email": "petebotto2012@gmail.com",
          "longitude": -82.458444,
          "latitude": 27.9477595,
          "password": "password",
          "name": "PETER BOTTO"
        },
        {
          "city": "Spring",
          "country": "United States",
          "state": "Texas",
          "email": "anniealtenhofen@gmail.com",
          "longitude": -95.504686,
          "latitude": 30.1734194,
          "password": "password",
          "name": null
        },
        {
          "city": "Toledo",
          "country": "United States",
          "state": "Ohio",
          "email": "nacema_mk@yahoo.com",
          "longitude": -83.5127283,
          "latitude": 41.6786754,
          "password": "password",
          "name": null
        },
        {
          "city": "Tolleson",
          "country": "United States",
          "state": "Arizona",
          "email": "jazminemarietorres@gmail.com",
          "longitude": -112.2593093,
          "latitude": 33.4500497,
          "password": "password",
          "name": null
        },
        {
          "city": "Traverse City",
          "country": "United States",
          "state": "Michigan",
          "email": "ak.courtney@hotmail.com",
          "longitude": -85.6165301,
          "latitude": 44.7606441,
          "password": "password",
          "name": null
        },
        {
          "city": "Troy",
          "country": "United States",
          "state": "Michigan",
          "email": "cschnoblen@gmail.com",
          "longitude": -83.1499304,
          "latitude": 42.6055893,
          "password": "password",
          "name": null
        },
        {
          "city": "Tryon",
          "country": "United States",
          "state": "North Carolina",
          "email": "orabell@windstream.net",
          "longitude": -82.2384479,
          "latitude": 35.2081695,
          "password": "password",
          "name": null
        },
        {
          "city": "Two Harbors",
          "country": "United States",
          "state": "Minnesota",
          "email": "jean@northshorehorizons.org",
          "longitude": -91.6729182,
          "latitude": 47.0256536,
          "password": "password",
          "name": "Jean Sewell"
        },
        {
          "city": "Colwich",
          "country": "United States",
          "state": "Kansas",
          "email": "love2shocku@yahoo.com",
          "longitude": -97.5336546,
          "latitude": 37.7582554,
          "password": "password",
          "name": null
        },
        {
          "city": "Hainesport",
          "country": "United States",
          "state": "New Jersey",
          "email": "natperk613@gmail.com",
          "longitude": -74.832944,
          "latitude": 39.973821,
          "password": "password",
          "name": null
        },
        {
          "city": "Ukiah",
          "country": "United States",
          "state": "California",
          "email": "raven@manzanitaservices.org",
          "longitude": -123.2077861,
          "latitude": 39.1501662,
          "password": "password",
          "name": null
        },
        {
          "city": "Oberlin",
          "country": "United States",
          "state": "Kansas",
          "email": "kristeen.schooler@gmail.com",
          "longitude": -100.4458825,
          "latitude": 39.7837304,
          "password": "password",
          "name": null
        },
        {
          "city": "Virginia Beach",
          "country": "United States",
          "state": "Virginia",
          "email": "arzufelt@gmail.com",
          "longitude": -75.9774183,
          "latitude": 36.8529841,
          "password": "password",
          "name": null
        },
        {
          "city": "Vista",
          "country": "United States",
          "state": "California",
          "email": "drurysonedna@gmail.com",
          "longitude": -117.2425355,
          "latitude": 33.2000368,
          "password": "password",
          "name": null
        },
        {
          "city": "Vista",
          "country": "United States",
          "state": "California",
          "email": "kivajohn@gmail.com",
          "longitude": -117.2425355,
          "latitude": 33.2000368,
          "password": "password",
          "name": null
        },
        {
          "city": "Waco",
          "country": "United States",
          "state": "Texas",
          "email": "phyllisanns@aol.com",
          "longitude": -97.1466695,
          "latitude": 31.549333,
          "password": "password",
          "name": null
        },
        {
          "city": "Waco",
          "country": "United States",
          "state": "Texas",
          "email": "tonya_tenberg@baylor.edu",
          "longitude": -97.1466695,
          "latitude": 31.549333,
          "password": "password",
          "name": null
        },
        {
          "city": "Waco",
          "country": "United States",
          "state": "Texas",
          "email": "cranney.stephen@gmail.com",
          "longitude": -97.1466695,
          "latitude": 31.549333,
          "password": "password",
          "name": null
        },
        {
          "city": "Waco",
          "country": "United States",
          "state": "Texas",
          "email": "seth@suttonmilam.com",
          "longitude": -97.1466695,
          "latitude": 31.549333,
          "password": "password",
          "name": null
        },
        {
          "city": "Washington",
          "country": "United States",
          "state": "District of Columbia",
          "email": "katherinetan06@gmail.com",
          "longitude": -77.0163780429,
          "latitude": 38.908227,
          "password": "password",
          "name": null
        },
        {
          "city": "Washington",
          "country": "United States",
          "state": "District of Columbia",
          "email": "jordanalisesale@gmail.com",
          "longitude": -77.0365625,
          "latitude": 38.8950092,
          "password": "password",
          "name": "Jordan Sale"
        },
        {
          "city": "Manawa",
          "country": "United States",
          "state": "Wisconsin",
          "email": "bonnimiller@yahoo.com",
          "longitude": -88.9650419,
          "latitude": 44.4927889,
          "password": "password",
          "name": null
        },
        {
          "city": "Whittier",
          "country": "United States",
          "state": "California",
          "email": "jose@askgpa.com",
          "longitude": -118.0308396,
          "latitude": 33.9708782,
          "password": "password",
          "name": null
        },
        {
          "city": "Wichita Falls",
          "country": "United States",
          "state": "Texas",
          "email": "cddivers2@aol.com",
          "longitude": -98.4933873,
          "latitude": 33.9137085,
          "password": "password",
          "name": null
        },
        {
          "city": "Wichita",
          "country": "United States",
          "state": "Kansas",
          "email": "longitudehornsmanagement@gmail.com",
          "longitude": -97.3375448,
          "latitude": 37.6922361,
          "password": "password",
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "New York",
          "email": "fireinfluence@gmail.com",
          "longitude": -73.95345,
          "latitude": 40.714622,
          "password": "password",
          "name": null
        },
        {
          "city": "Wilmington",
          "country": "United States",
          "state": "North Carolina",
          "email": "cpatrick@firstfruitministries.org",
          "longitude": -77.9447107,
          "latitude": 34.2257282,
          "password": "password",
          "name": null
        },
        {
          "city": "Worcester",
          "country": "United States",
          "state": "Massachusetts",
          "email": "fr.warren@gmail.com",
          "longitude": -71.8022934,
          "latitude": 42.2625932,
          "password": "password",
          "name": null
        },
        {
          "city": "York",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "zroppelt@yahoo.com",
          "longitude": -76.727392,
          "latitude": 39.962398,
          "password": "password",
          "name": null
        },
        {
          "city": "York",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "skeister@covenanthousepa.org",
          "longitude": -76.727392,
          "latitude": 39.962398,
          "password": "password",
          "name": null
        },
        {
          "city": "New Orleans",
          "country": "United States",
          "state": "Louisiana",
          "email": "timtastik.s@gmail.com",
          "longitude": -90.0701156,
          "latitude": 29.9499323,
          "password": "password",
          "name": null
        },
        {
          "city": "Columbus",
          "country": "United States",
          "state": "Ohio",
          "email": "dhcolby@gmail.com",
          "longitude": -83.0007065,
          "latitude": 39.9622601,
          "password": "password",
          "name": "Daniel Colby"
        },
        {
          "city": "Stuart",
          "country": "United States",
          "state": "Florida",
          "email": "canwehelpstuart@gmail.com",
          "longitude": -80.2519175,
          "latitude": 27.197983,
          "password": "password",
          "name": "Bob Durst"
        },
        {
          "city": "Denton",
          "country": "United States",
          "state": "Texas",
          "email": "cinred@gmail.com",
          "longitude": -97.1413417,
          "latitude": 33.1838787,
          "password": "password",
          "name": "Cindy Tunstall"
        },
        {
          "city": "Oakland",
          "country": "United States",
          "state": "California",
          "email": "brian@brianmolyneaux.com",
          "longitude": -122.3500192,
          "latitude": 37.8188017,
          "password": "password",
          "name": "Brian Molyneaux"
        },
        {
          "city": "Milwaukee",
          "country": "United States",
          "state": "Wisconsin",
          "email": "jieunlee035@gmail.com",
          "longitude": -87.922497,
          "latitude": 43.0349931,
          "password": "password",
          "name": "Jieun Lee"
        },
        {
          "city": "Novato",
          "country": "United States",
          "state": "California",
          "email": "jacqueline@jacquelinejanssen.com",
          "longitude": -122.5681191,
          "latitude": 38.1061979,
          "password": "password",
          "name": "Jacqueline Janssen"
        },
        {
          "city": "Springfield",
          "country": "United States",
          "state": "Missouri",
          "email": "emma.torno@gmail.com",
          "longitude": -93.2920373,
          "latitude": 37.2166779,
          "password": "password",
          "name": "Emma Torno"
        },
        {
          "city": "Miami",
          "country": "United States",
          "state": "Florida",
          "email": "barbi@miamilivinggroup.com",
          "longitude": -80.1936589,
          "latitude": 25.7742658,
          "password": "password",
          "name": "Barbi Triana"
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "mr86@me.com",
          "longitude": -121.4943996,
          "latitude": 38.5815719,
          "password": "password",
          "name": "Richard Dias"
        },
        {
          "city": "Grand Rapids",
          "country": "United States",
          "state": "Michigan",
          "email": "americorps@degageministries.org",
          "longitude": -85.6678639,
          "latitude": 42.9632405,
          "password": "password",
          "name": "Christina Verbrugge"
        },
        {
          "city": "Middletown",
          "country": "United States",
          "state": "Connecticut",
          "email": "jenna_white@icloud.com",
          "longitude": -72.6509061,
          "latitude": 41.5623178,
          "password": "password",
          "name": "Jenn White"
        },
        {
          "city": "Santa Cruz",
          "country": "United States",
          "state": "California",
          "email": "maryrmcnamara@yahoo.com",
          "longitude": -122.0285259,
          "latitude": 36.9749416,
          "password": "password",
          "name": "Mary Henderson"
        },
        {
          "city": "Turlock",
          "country": "United States",
          "state": "California",
          "email": "carleigharnold@coldwaterinc.org",
          "longitude": -120.8465941,
          "latitude": 37.4946568,
          "password": "password",
          "name": "Carleigh Arnold"
        },
        {
          "city": "Morgantown",
          "country": "United States",
          "state": "West Virginia",
          "email": "timothynelms@hotmail.com",
          "longitude": -79.9559437,
          "latitude": 39.6296809,
          "password": "password",
          "name": "Timbo Nelms"
        },
        {
          "city": "Warwick",
          "country": "United States",
          "state": "Rhode Island",
          "email": "whittier.ashley@yahoo.com",
          "longitude": -71.4161108,
          "latitude": 41.7002024,
          "password": "password",
          "name": "Ashley Whittier"
        },
        {
          "city": "Miami",
          "country": "United States",
          "state": "Florida",
          "email": "jonathangilbertflores@gmail.com",
          "longitude": -80.1936589,
          "latitude": 25.7742658,
          "password": "password",
          "name": "Jonathan Flores"
        },
        {
          "city": "Mobile",
          "country": "United States",
          "state": "Alabama",
          "email": "eswheeless@gmail.com",
          "longitude": -88.0430541,
          "latitude": 30.6943566,
          "password": "password",
          "name": "Eva Wheeless"
        },
        {
          "city": "Detroit",
          "country": "United States",
          "state": "Michigan",
          "email": "blackjackmay11@gmail.com",
          "longitude": -83.0466403,
          "latitude": 42.3315509,
          "password": "password",
          "name": "Devion May"
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "mollyryansings@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "password": "password",
          "name": "Molly Ryan"
        },
        {
          "city": "Mankato",
          "country": "United States",
          "state": "Minnesota",
          "email": "amjohnson904@gmail.com",
          "longitude": -93.9993505,
          "latitude": 44.1634663,
          "password": "password",
          "name": "Alyssa Johnson"
        },
        {
          "city": "Raleigh",
          "country": "United States",
          "state": "North Carolina",
          "email": "kimber.leigh676@gmail.com",
          "longitude": -78.6390989,
          "latitude": 35.7803977,
          "password": "password",
          "name": "Kim Bennett"
        },
        {
          "city": "Ogden",
          "country": "United States",
          "state": "Utah",
          "email": "davidcraig.craig@gmail.com",
          "longitude": -111.9738429,
          "latitude": 41.2230048,
          "password": "password",
          "name": "David Craig"
        },
        {
          "city": "Laurel",
          "country": "United States",
          "state": "Maryland",
          "email": "alves.ralph@gmail.com",
          "longitude": -76.8483061,
          "latitude": 39.0992752,
          "password": "password",
          "name": "Ralph Alves"
        },
        {
          "city": "Reno",
          "country": "United States",
          "state": "Nevada",
          "email": "k_elissa@yahoo.com",
          "longitude": -119.8136744,
          "latitude": 39.52927,
          "password": "password",
          "name": "Elissa Kratson"
        },
        {
          "city": "San Antonio",
          "country": "United States",
          "state": "Texas",
          "email": "hernandez_erika1@yahoo.com",
          "longitude": -98.4951405,
          "latitude": 29.4246002,
          "password": "password",
          "name": "ERIKA HERNANDEZ"
        },
        {
          "city": "Pittsburgh",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "jonahgrail@gmail.com",
          "longitude": -79.9900861,
          "latitude": 40.4416941,
          "password": "password",
          "name": "Jonah Grail"
        }
      ]);
    });
};
