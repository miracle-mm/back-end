
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
          "lattitude": 37.5385087,
          "name": null
        },
        {
          "city": "Richmond",
          "country": "United States",
          "state": "Virginia",
          "email": "mejis1067@gmail.com",
          "longitude": -77.43428,
          "lattitude": 37.5385087,
          "name": null
        },
        {
          "city": "Rochester",
          "country": "United States",
          "state": "New York",
          "email": "info@jmaxmedia.com",
          "longitude": -77.615214,
          "lattitude": 43.157285,
          "name": null
        },
        {
          "city": "Eldon",
          "country": "United States",
          "state": "Missouri",
          "email": "shannonkeitel@yahoo.com",
          "longitude": -92.6692515,
          "lattitude": 38.3277052,
          "name": null
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "rmetzker@pacbell.net",
          "longitude": -121.4943996,
          "lattitude": 38.5815719,
          "name": null
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "marjar85@gmail.com",
          "longitude": -121.4943996,
          "lattitude": 38.5815719,
          "name": null
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "jp@aboutnewlife.com",
          "longitude": -121.4943996,
          "lattitude": 38.5815719,
          "name": null
        },
        {
          "city": "Ventnor City",
          "country": "United States",
          "state": "New Jersey",
          "email": "melissadbrolland@gmail.com",
          "longitude": -74.483242,
          "lattitude": 39.341244,
          "name": null
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "casooner@hotmail.com",
          "longitude": -121.4943996,
          "lattitude": 38.5815719,
          "name": "Angela Taylor"
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "missy_may@ymail.com",
          "longitude": -121.4943996,
          "lattitude": 38.5815719,
          "name": null
        },
        {
          "city": "Salt Lake City",
          "country": "United States",
          "state": "Utah",
          "email": "jzemp@crowchild.com",
          "longitude": -111.8904308,
          "lattitude": 40.7670126,
          "name": null
        },
        {
          "city": "Salt Lake City",
          "country": "United States",
          "state": "Utah",
          "email": "sendys.estevez@gmail.com",
          "longitude": -111.8904308,
          "lattitude": 40.7670126,
          "name": null
        },
        {
          "city": "Salt Lake City",
          "country": "United States",
          "state": "Utah",
          "email": "goldenstairs@gmail.com",
          "longitude": -111.8904308,
          "lattitude": 40.7670126,
          "name": "Charity Judkins"
        },
        {
          "city": "Salt Lake City",
          "country": "United States",
          "state": "Utah",
          "email": "lizzyk55@gmail.com",
          "longitude": -111.8904308,
          "lattitude": 40.7670126,
          "name": "Liz Knowles"
        },
        {
          "city": "Salt Lake City",
          "country": "United States",
          "state": "Utah",
          "email": "sarah.franklin9@gmail.com",
          "longitude": -111.8904308,
          "lattitude": 40.7670126,
          "name": null
        },
        {
          "city": "San Antonio",
          "country": "United States",
          "state": "Texas",
          "email": "garner2457@gmail.com",
          "longitude": -98.4951405,
          "lattitude": 29.4246002,
          "name": null
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "john@styn.net",
          "longitude": -117.1627714,
          "lattitude": 32.7174209,
          "name": null
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "justinseid@gmail.com",
          "longitude": -117.1627714,
          "lattitude": 32.7174209,
          "name": null
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "kim@ramonatownradio.com",
          "longitude": -117.1627714,
          "lattitude": 32.7174209,
          "name": "Kimberly Kelly"
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "jalldredge23@gmail.com",
          "longitude": -117.1627714,
          "lattitude": 32.7174209,
          "name": "Julia Alldredge"
        },
        {
          "city": "San Diego",
          "country": "United States",
          "state": "California",
          "email": "landholmr@gmail.com",
          "longitude": -117.1627714,
          "lattitude": 32.7174209,
          "name": "Robin Landholm"
        },
        {
          "city": "San Luis Obispo",
          "country": "United States",
          "state": "California",
          "email": "amyarm@ucla.edu",
          "longitude": -120.6596156,
          "lattitude": 35.2827525,
          "name": null
        },
        {
          "city": "Santa Barbara",
          "country": "United States",
          "state": "California",
          "email": "erin@oceanhills.org",
          "longitude": -119.7026673,
          "lattitude": 34.4221319,
          "name": null
        },
        {
          "city": "Santa Fe",
          "country": "United States",
          "state": "New Mexico",
          "email": "tbsosinski@gmail.com",
          "longitude": -105.9377997,
          "lattitude": 35.6869996,
          "name": null
        },
        {
          "city": "Santee",
          "country": "United States",
          "state": "California",
          "email": "billchristinagates@gmail.com",
          "longitude": -116.9739167,
          "lattitude": 32.8383828,
          "name": null
        },
        {
          "city": "Sarasota",
          "country": "United States",
          "state": "Florida",
          "email": "scottkristianna@gmail.com",
          "longitude": -82.5306527,
          "lattitude": 27.3364347,
          "name": "Kristianna Scott"
        },
        {
          "city": "Sausalito",
          "country": "United States",
          "state": "California",
          "email": "erin.vanliemt@gmail.com",
          "longitude": -122.4854694,
          "lattitude": 37.8590272,
          "name": "Erin van Liemt"
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "jake.tozier@gmail.com",
          "longitude": -122.3300624,
          "lattitude": 47.6038321,
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "bailey.hults@gmail.com",
          "longitude": -122.3300624,
          "lattitude": 47.6038321,
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "smyers969@hotmail.com",
          "longitude": -122.3300624,
          "lattitude": 47.6038321,
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "alexa.moncrief@gmail.com",
          "longitude": -122.3300624,
          "lattitude": 47.6038321,
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "matthew.t.adkins@gmail.com",
          "longitude": -122.3300624,
          "lattitude": 47.6038321,
          "name": null
        },
        {
          "city": "Seattle",
          "country": "United States",
          "state": "Washington",
          "email": "reply2monica@yahoo.com",
          "longitude": -122.3300624,
          "lattitude": 47.6038321,
          "name": null
        },
        {
          "city": "Shreveport",
          "country": "United States",
          "state": "Louisiana",
          "email": "mfkhan@uh.edu",
          "longitude": -93.7651944,
          "lattitude": 32.5221828,
          "name": null
        },
        {
          "city": "Shreveport",
          "country": "United States",
          "state": "Louisiana",
          "email": "michaelsbillings@gmail.com",
          "longitude": -93.7651944,
          "lattitude": 32.5221828,
          "name": "MIchael Billings"
        },
        {
          "city": "Sisters",
          "country": "United States",
          "state": "Oregon",
          "email": "lassenbutterfly@gmail.com",
          "longitude": -121.5492516,
          "lattitude": 44.290948,
          "name": null
        },
        {
          "city": "Windsor",
          "country": "United States",
          "state": "California",
          "email": "heidi.taskforce@gmail.com",
          "longitude": -122.8473388,
          "lattitude": 38.5110803,
          "name": null
        },
        {
          "city": "South Bend",
          "country": "United States",
          "state": "Indiana",
          "email": "tracyleliaert@gmail.com",
          "longitude": -86.2500066,
          "lattitude": 41.6833813,
          "name": null
        },
        {
          "city": "Spokane",
          "country": "United States",
          "state": "Washington",
          "email": "gsftagivesback@gmail.com",
          "longitude": -117.4212265,
          "lattitude": 47.6579425,
          "name": null
        },
        {
          "city": "Springfield",
          "country": "United States",
          "state": "Massachusetts",
          "email": "travissayomwilliams@gmail.com",
          "longitude": -72.589811,
          "lattitude": 42.1014831,
          "name": null
        },
        {
          "city": "St. Louis",
          "country": "United States",
          "state": "Missouri",
          "email": "bgclick@gmail.com",
          "longitude": -90.1994097,
          "lattitude": 38.6268039,
          "name": null
        },
        {
          "city": "Chesterfield",
          "country": "United States",
          "state": "Missouri",
          "email": "julienne.shin@gmail.com",
          "longitude": -90.518812775,
          "lattitude": 38.6398744,
          "name": null
        },
        {
          "city": "St. Petersburg",
          "country": "United States",
          "state": "Florida",
          "email": "giselealucia@gmail.com",
          "longitude": -82.6695085,
          "lattitude": 27.7703796,
          "name": null
        },
        {
          "city": "St. George",
          "country": "United States",
          "state": "Utah",
          "email": "hailhydra187@gmail.com",
          "longitude": -113.5841313,
          "lattitude": 37.104153,
          "name": null
        },
        {
          "city": "Stafford Township",
          "country": "United States",
          "state": "New Jersey",
          "email": "ah1stcu@gmail.com",
          "longitude": -74.2779616,
          "lattitude": 39.7114651,
          "name": null
        },
        {
          "city": "Stamford",
          "country": "United States",
          "state": "Connecticut",
          "email": "abarer@pacifichouse.org",
          "longitude": -73.5387341,
          "lattitude": 41.0534302,
          "name": null
        },
        {
          "city": "Suisun City",
          "country": "United States",
          "state": "California",
          "email": "mherbison@sbcglobal.net",
          "longitude": -122.040244,
          "lattitude": 38.2382474,
          "name": null
        },
        {
          "city": "Sunnyvale",
          "country": "United States",
          "state": "California",
          "email": "shickok@sunnyvale.ca.gov",
          "longitude": -122.0363496,
          "lattitude": 37.3688301,
          "name": null
        },
        {
          "city": "Sunnyvale",
          "country": "United States",
          "state": "California",
          "email": "emilydoanx@gmail.com",
          "longitude": -122.0363496,
          "lattitude": 37.3688301,
          "name": null
        },
        {
          "city": "Los Angeles",
          "country": "United States",
          "state": "California",
          "email": "marissanmorales@yahoo.com",
          "longitude": -118.4492148,
          "lattitude": 34.3076252,
          "name": "Marissa Morales"
        },
        {
          "city": "Syracuse",
          "country": "United States",
          "state": "New York",
          "email": "cjr8006@yahoo.com",
          "longitude": -76.1474244,
          "lattitude": 43.0481221,
          "name": "Chris Rossi"
        },
        {
          "city": "Tacoma",
          "country": "United States",
          "state": "Washington",
          "email": "tehraven@gmail.com",
          "longitude": -122.4398746,
          "lattitude": 47.2495798,
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "Florida",
          "email": "james@homelesslivesmatter.org",
          "longitude": -82.5723193,
          "lattitude": 27.6886419,
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "Florida",
          "email": "info@outpostforhope.org",
          "longitude": -82.5723193,
          "lattitude": 27.6886419,
          "name": null
        },
        {
          "city": "Tampa",
          "country": "United States",
          "state": "Florida",
          "email": "iurquilla92@gmail.com",
          "longitude": -82.458444,
          "lattitude": 27.9477595,
          "name": null
        },
        {
          "city": "Tampa",
          "country": "United States",
          "state": "Florida",
          "email": "matthew132@mail.usf.edu",
          "longitude": -82.458444,
          "lattitude": 27.9477595,
          "name": null
        },
        {
          "city": "Tampa",
          "country": "United States",
          "state": "Florida",
          "email": "petebotto2012@gmail.com",
          "longitude": -82.458444,
          "lattitude": 27.9477595,
          "name": "PETER BOTTO"
        },
        {
          "city": "Spring",
          "country": "United States",
          "state": "Texas",
          "email": "anniealtenhofen@gmail.com",
          "longitude": -95.504686,
          "lattitude": 30.1734194,
          "name": null
        },
        {
          "city": "Toledo",
          "country": "United States",
          "state": "Ohio",
          "email": "nacema_mk@yahoo.com",
          "longitude": -83.5127283,
          "lattitude": 41.6786754,
          "name": null
        },
        {
          "city": "Tolleson",
          "country": "United States",
          "state": "Arizona",
          "email": "jazminemarietorres@gmail.com",
          "longitude": -112.2593093,
          "lattitude": 33.4500497,
          "name": null
        },
        {
          "city": "Traverse City",
          "country": "United States",
          "state": "Michigan",
          "email": "ak.courtney@hotmail.com",
          "longitude": -85.6165301,
          "lattitude": 44.7606441,
          "name": null
        },
        {
          "city": "Troy",
          "country": "United States",
          "state": "Michigan",
          "email": "cschnoblen@gmail.com",
          "longitude": -83.1499304,
          "lattitude": 42.6055893,
          "name": null
        },
        {
          "city": "Tryon",
          "country": "United States",
          "state": "North Carolina",
          "email": "orabell@windstream.net",
          "longitude": -82.2384479,
          "lattitude": 35.2081695,
          "name": null
        },
        {
          "city": "Two Harbors",
          "country": "United States",
          "state": "Minnesota",
          "email": "jean@northshorehorizons.org",
          "longitude": -91.6729182,
          "lattitude": 47.0256536,
          "name": "Jean Sewell"
        },
        {
          "city": "Colwich",
          "country": "United States",
          "state": "Kansas",
          "email": "love2shocku@yahoo.com",
          "longitude": -97.5336546,
          "lattitude": 37.7582554,
          "name": null
        },
        {
          "city": "Hainesport",
          "country": "United States",
          "state": "New Jersey",
          "email": "natperk613@gmail.com",
          "longitude": -74.832944,
          "lattitude": 39.973821,
          "name": null
        },
        {
          "city": "Ukiah",
          "country": "United States",
          "state": "California",
          "email": "raven@manzanitaservices.org",
          "longitude": -123.2077861,
          "lattitude": 39.1501662,
          "name": null
        },
        {
          "city": "Oberlin",
          "country": "United States",
          "state": "Kansas",
          "email": "kristeen.schooler@gmail.com",
          "longitude": -100.4458825,
          "lattitude": 39.7837304,
          "name": null
        },
        {
          "city": "Virginia Beach",
          "country": "United States",
          "state": "Virginia",
          "email": "arzufelt@gmail.com",
          "longitude": -75.9774183,
          "lattitude": 36.8529841,
          "name": null
        },
        {
          "city": "Vista",
          "country": "United States",
          "state": "California",
          "email": "drurysonedna@gmail.com",
          "longitude": -117.2425355,
          "lattitude": 33.2000368,
          "name": null
        },
        {
          "city": "Vista",
          "country": "United States",
          "state": "California",
          "email": "kivajohn@gmail.com",
          "longitude": -117.2425355,
          "lattitude": 33.2000368,
          "name": null
        },
        {
          "city": "Waco",
          "country": "United States",
          "state": "Texas",
          "email": "phyllisanns@aol.com",
          "longitude": -97.1466695,
          "lattitude": 31.549333,
          "name": null
        },
        {
          "city": "Waco",
          "country": "United States",
          "state": "Texas",
          "email": "tonya_tenberg@baylor.edu",
          "longitude": -97.1466695,
          "lattitude": 31.549333,
          "name": null
        },
        {
          "city": "Waco",
          "country": "United States",
          "state": "Texas",
          "email": "cranney.stephen@gmail.com",
          "longitude": -97.1466695,
          "lattitude": 31.549333,
          "name": null
        },
        {
          "city": "Waco",
          "country": "United States",
          "state": "Texas",
          "email": "seth@suttonmilam.com",
          "longitude": -97.1466695,
          "lattitude": 31.549333,
          "name": null
        },
        {
          "city": "Washington",
          "country": "United States",
          "state": "District of Columbia",
          "email": "katherinetan06@gmail.com",
          "longitude": -77.0163780429,
          "lattitude": 38.908227,
          "name": null
        },
        {
          "city": "Washington",
          "country": "United States",
          "state": "District of Columbia",
          "email": "jordanalisesale@gmail.com",
          "longitude": -77.0365625,
          "lattitude": 38.8950092,
          "name": "Jordan Sale"
        },
        {
          "city": "Manawa",
          "country": "United States",
          "state": "Wisconsin",
          "email": "bonnimiller@yahoo.com",
          "longitude": -88.9650419,
          "lattitude": 44.4927889,
          "name": null
        },
        {
          "city": "Whittier",
          "country": "United States",
          "state": "California",
          "email": "jose@askgpa.com",
          "longitude": -118.0308396,
          "lattitude": 33.9708782,
          "name": null
        },
        {
          "city": "Wichita Falls",
          "country": "United States",
          "state": "Texas",
          "email": "cddivers2@aol.com",
          "longitude": -98.4933873,
          "lattitude": 33.9137085,
          "name": null
        },
        {
          "city": "Wichita",
          "country": "United States",
          "state": "Kansas",
          "email": "longitudehornsmanagement@gmail.com",
          "longitude": -97.3375448,
          "lattitude": 37.6922361,
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "New York",
          "email": "fireinfluence@gmail.com",
          "longitude": -73.95345,
          "lattitude": 40.714622,
          "name": null
        },
        {
          "city": "Wilmington",
          "country": "United States",
          "state": "North Carolina",
          "email": "cpatrick@firstfruitministries.org",
          "longitude": -77.9447107,
          "lattitude": 34.2257282,
          "name": null
        },
        {
          "city": "Worcester",
          "country": "United States",
          "state": "Massachusetts",
          "email": "fr.warren@gmail.com",
          "longitude": -71.8022934,
          "lattitude": 42.2625932,
          "name": null
        },
        {
          "city": "York",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "zroppelt@yahoo.com",
          "longitude": -76.727392,
          "lattitude": 39.962398,
          "name": null
        },
        {
          "city": "York",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "skeister@covenanthousepa.org",
          "longitude": -76.727392,
          "lattitude": 39.962398,
          "name": null
        },
        {
          "city": "New Orleans",
          "country": "United States",
          "state": "Louisiana",
          "email": "timtastik.s@gmail.com",
          "longitude": -90.0701156,
          "lattitude": 29.9499323,
          "name": null
        },
        {
          "city": "Columbus",
          "country": "United States",
          "state": "Ohio",
          "email": "dhcolby@gmail.com",
          "longitude": -83.0007065,
          "lattitude": 39.9622601,
          "name": "Daniel Colby"
        },
        {
          "city": "Stuart",
          "country": "United States",
          "state": "Florida",
          "email": "canwehelpstuart@gmail.com",
          "longitude": -80.2519175,
          "lattitude": 27.197983,
          "name": "Bob Durst"
        },
        {
          "city": "Denton",
          "country": "United States",
          "state": "Texas",
          "email": "cinred@gmail.com",
          "longitude": -97.1413417,
          "lattitude": 33.1838787,
          "name": "Cindy Tunstall"
        },
        {
          "city": "Oakland",
          "country": "United States",
          "state": "California",
          "email": "brian@brianmolyneaux.com",
          "longitude": -122.3500192,
          "lattitude": 37.8188017,
          "name": "Brian Molyneaux"
        },
        {
          "city": "Milwaukee",
          "country": "United States",
          "state": "Wisconsin",
          "email": "jieunlee035@gmail.com",
          "longitude": -87.922497,
          "lattitude": 43.0349931,
          "name": "Jieun Lee"
        },
        {
          "city": "Novato",
          "country": "United States",
          "state": "California",
          "email": "jacqueline@jacquelinejanssen.com",
          "longitude": -122.5681191,
          "lattitude": 38.1061979,
          "name": "Jacqueline Janssen"
        },
        {
          "city": "Springfield",
          "country": "United States",
          "state": "Missouri",
          "email": "emma.torno@gmail.com",
          "longitude": -93.2920373,
          "lattitude": 37.2166779,
          "name": "Emma Torno"
        },
        {
          "city": "Miami",
          "country": "United States",
          "state": "Florida",
          "email": "barbi@miamilivinggroup.com",
          "longitude": -80.1936589,
          "lattitude": 25.7742658,
          "name": "Barbi Triana"
        },
        {
          "city": "Sacramento",
          "country": "United States",
          "state": "California",
          "email": "mr86@me.com",
          "longitude": -121.4943996,
          "lattitude": 38.5815719,
          "name": "Richard Dias"
        },
        {
          "city": "Grand Rapids",
          "country": "United States",
          "state": "Michigan",
          "email": "americorps@degageministries.org",
          "longitude": -85.6678639,
          "lattitude": 42.9632405,
          "name": "Christina Verbrugge"
        },
        {
          "city": "Middletown",
          "country": "United States",
          "state": "Connecticut",
          "email": "jenna_white@icloud.com",
          "longitude": -72.6509061,
          "lattitude": 41.5623178,
          "name": "Jenn White"
        },
        {
          "city": "Santa Cruz",
          "country": "United States",
          "state": "California",
          "email": "maryrmcnamara@yahoo.com",
          "longitude": -122.0285259,
          "lattitude": 36.9749416,
          "name": "Mary Henderson"
        },
        {
          "city": "Turlock",
          "country": "United States",
          "state": "California",
          "email": "carleigharnold@coldwaterinc.org",
          "longitude": -120.8465941,
          "lattitude": 37.4946568,
          "name": "Carleigh Arnold"
        },
        {
          "city": "Morgantown",
          "country": "United States",
          "state": "West Virginia",
          "email": "timothynelms@hotmail.com",
          "longitude": -79.9559437,
          "lattitude": 39.6296809,
          "name": "Timbo Nelms"
        },
        {
          "city": "Warwick",
          "country": "United States",
          "state": "Rhode Island",
          "email": "whittier.ashley@yahoo.com",
          "longitude": -71.4161108,
          "lattitude": 41.7002024,
          "name": "Ashley Whittier"
        },
        {
          "city": "Miami",
          "country": "United States",
          "state": "Florida",
          "email": "jonathangilbertflores@gmail.com",
          "longitude": -80.1936589,
          "lattitude": 25.7742658,
          "name": "Jonathan Flores"
        },
        {
          "city": "Mobile",
          "country": "United States",
          "state": "Alabama",
          "email": "eswheeless@gmail.com",
          "longitude": -88.0430541,
          "lattitude": 30.6943566,
          "name": "Eva Wheeless"
        },
        {
          "city": "Detroit",
          "country": "United States",
          "state": "Michigan",
          "email": "blackjackmay11@gmail.com",
          "longitude": -83.0466403,
          "lattitude": 42.3315509,
          "name": "Devion May"
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "mollyryansings@gmail.com",
          "longitude": -74.0060152,
          "lattitude": 40.7127281,
          "name": "Molly Ryan"
        },
        {
          "city": "Mankato",
          "country": "United States",
          "state": "Minnesota",
          "email": "amjohnson904@gmail.com",
          "longitude": -93.9993505,
          "lattitude": 44.1634663,
          "name": "Alyssa Johnson"
        },
        {
          "city": "Raleigh",
          "country": "United States",
          "state": "North Carolina",
          "email": "kimber.leigh676@gmail.com",
          "longitude": -78.6390989,
          "lattitude": 35.7803977,
          "name": "Kim Bennett"
        },
        {
          "city": "Ogden",
          "country": "United States",
          "state": "Utah",
          "email": "davidcraig.craig@gmail.com",
          "longitude": -111.9738429,
          "lattitude": 41.2230048,
          "name": "David Craig"
        },
        {
          "city": "Laurel",
          "country": "United States",
          "state": "Maryland",
          "email": "alves.ralph@gmail.com",
          "longitude": -76.8483061,
          "lattitude": 39.0992752,
          "name": "Ralph Alves"
        },
        {
          "city": "Reno",
          "country": "United States",
          "state": "Nevada",
          "email": "k_elissa@yahoo.com",
          "longitude": -119.8136744,
          "lattitude": 39.52927,
          "name": "Elissa Kratson"
        },
        {
          "city": "San Antonio",
          "country": "United States",
          "state": "Texas",
          "email": "hernandez_erika1@yahoo.com",
          "longitude": -98.4951405,
          "lattitude": 29.4246002,
          "name": "ERIKA HERNANDEZ"
        },
        {
          "city": "Pittsburgh",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "jonahgrail@gmail.com",
          "longitude": -79.9900861,
          "lattitude": 40.4416941,
          "name": "Jonah Grail"
        }
      ]);
    });
};
