
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('partners')
    .then(function () {
      // Inserts seed entries
      return knex('partners').insert([
        
        {
          "city": "Madison",
          "country": "United States",
          "state": "Florida",
          "email": "jasonober@gmail.com",
          "longitude": -83.4129254,
          "latitude": 30.4693772,
          "name": null
        },
        {
          "city": "Madison",
          "country": "United States",
          "state": "Florida",
          "email": "hands842@gmail.com",
          "longitude": -83.4129254,
          "latitude": 30.4693772,
          "name": null
        },
        {
          "city": "Huntington",
          "country": "United States",
          "state": "West Virginia",
          "email": "bldsckr52@yahoo.com",
          "longitude": -82.445154,
          "latitude": 38.4192496,
          "name": "Michelle Ramey"
        },
        {
          "city": "Thousand Oaks",
          "country": "United States",
          "state": "California",
          "email": "jason@onereachcity.com",
          "longitude": -118.8433527,
          "latitude": 34.1712252,
          "name": null
        },
        {
          "city": "Fayetteville",
          "country": "United States",
          "state": "North Carolina",
          "email": "rkerse@ymail.com",
          "longitude": -78.878292,
          "latitude": 35.0525759,
          "name": null
        },
        {
          "city": "Fruitport Charter Township",
          "country": "United States",
          "state": "Michigan",
          "email": "melissarice2013@yahoo.com",
          "longitude": -86.154682,
          "latitude": 43.13067,
          "name": null
        },
        {
          "city": "Gainesville",
          "country": "United States",
          "state": "Florida",
          "email": "isabelulm98@ufl.edu",
          "longitude": -82.3249961,
          "latitude": 29.6519396,
          "name": null
        },
        {
          "city": "Gainesville",
          "country": "United States",
          "state": "Florida",
          "email": "brochebrun16@ufl.edu",
          "longitude": -82.3249961,
          "latitude": 29.6519396,
          "name": null
        },
        {
          "city": "Gardena",
          "country": "United States",
          "state": "California",
          "email": "camar291@yahoo.com",
          "longitude": -118.3053037,
          "latitude": 33.8963593,
          "name": null
        },
        {
          "city": "Grants Pass",
          "country": "United States",
          "state": "Oregon",
          "email": "catbonney@gmail.com",
          "longitude": -123.3272489,
          "latitude": 42.4393707,
          "name": null
        },
        {
          "city": "Grapevine",
          "country": "United States",
          "state": "Texas",
          "email": "toniacasper@yahoo.com",
          "longitude": -97.0780654,
          "latitude": 32.9342919,
          "name": null
        },
        {
          "city": "Greenville",
          "country": "United States",
          "state": "Kentucky",
          "email": "jaedw@yahoo.com",
          "longitude": -87.1788854,
          "latitude": 37.2011539,
          "name": null
        },
        {
          "city": "Gresham",
          "country": "United States",
          "state": "Oregon",
          "email": "adam49ric@yahoo.com",
          "longitude": -122.4367058,
          "latitude": 45.5067406,
          "name": null
        },
        {
          "city": "Haleiwa",
          "country": "United States",
          "state": "Hawaii",
          "email": "ebnielsen54@gmail.com",
          "longitude": -158.1050145,
          "latitude": 21.5817934,
          "name": null
        },
        {
          "city": "Hamden",
          "country": "United States",
          "state": "Connecticut",
          "email": "frippjay@msn.com",
          "longitude": -72.8968716,
          "latitude": 41.3959287,
          "name": null
        },
        {
          "city": "Hartford",
          "country": "United States",
          "state": "Connecticut",
          "email": "bryanbsurfin@sbcglobal.net",
          "longitude": -72.6908547,
          "latitude": 41.764582,
          "name": null
        },
        {
          "city": "Hayden",
          "country": "United States",
          "state": "Idaho",
          "email": "dminerath@msn.com",
          "longitude": -116.7866807,
          "latitude": 47.7590638,
          "name": null
        },
        {
          "city": "Johnson City",
          "country": "United States",
          "state": "Tennessee",
          "email": "volunteer@goodsamjc.org",
          "longitude": -82.3534728,
          "latitude": 36.3134398,
          "name": null
        },
        {
          "city": "Kansas City",
          "country": "United States",
          "state": "Kansas",
          "email": "brittneelhaynes@gmail.com",
          "longitude": -94.626497,
          "latitude": 39.1134562,
          "name": null
        },
        {
          "city": "Kansas City",
          "country": "United States",
          "state": "Missouri",
          "email": "gdoll@swopehealth.org",
          "longitude": -94.5781416,
          "latitude": 39.100105,
          "name": null
        },
        {
          "city": "Katy",
          "country": "United States",
          "state": "Texas",
          "email": "ryan@mlckaty.com",
          "longitude": -95.8243956,
          "latitude": 29.7857853,
          "name": null
        },
        {
          "city": "Key West",
          "country": "United States",
          "state": "Florida",
          "email": "exdir.shal@gmail.com",
          "longitude": -81.7724368,
          "latitude": 24.5625566,
          "name": null
        },
        {
          "city": "Knoxville",
          "country": "United States",
          "state": "Tennessee",
          "email": "amandat421@gmail.com",
          "longitude": -83.9210261,
          "latitude": 35.9603948,
          "name": null
        },
        {
          "city": "Laguna Beach",
          "country": "United States",
          "state": "California",
          "email": "mherbolich@gmail.com",
          "longitude": -117.7834147,
          "latitude": 33.5420888,
          "name": "Matthew Herbolich"
        },
        {
          "city": "Lakeport",
          "country": "United States",
          "state": "California",
          "email": "gillianpar@gmail.com",
          "longitude": -122.9158293,
          "latitude": 39.0429506,
          "name": null
        },
        {
          "city": "Lima",
          "country": "United States",
          "state": "Ohio",
          "email": "mimiistheboss2012@gmail.com",
          "longitude": -84.1052256,
          "latitude": 40.742551,
          "name": null
        },
        {
          "city": "Little Rock",
          "country": "United States",
          "state": "Arkansas",
          "email": "jessica.watts@lrsd.org",
          "longitude": -92.2895948,
          "latitude": 34.7464809,
          "name": null
        },
        {
          "city": "Manteca",
          "country": "United States",
          "state": "California",
          "email": "brcarrillo4809@gmail.com",
          "longitude": -121.2117148,
          "latitude": 37.7986184,
          "name": "blanca carrillo"
        },
        {
          "city": "Palm City",
          "country": "United States",
          "state": "Florida",
          "email": "tentcityhelpers@yahoo.com",
          "longitude": -80.3994412,
          "latitude": 27.0673711,
          "name": null
        },
        {
          "city": "Oakham",
          "country": "United States",
          "state": "Massachusetts",
          "email": "kimdave67@yahoo.com",
          "longitude": -72.032366,
          "latitude": 42.3788774,
          "name": null
        },
        {
          "city": "Memphis",
          "country": "United States",
          "state": "Tennessee",
          "email": "sybilmitchell1109@gmail.com",
          "longitude": -90.0516285,
          "latitude": 35.1490215,
          "name": null
        },
        {
          "city": "Fredonia",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "apr_reid@icloud.com",
          "longitude": -80.3014412,
          "latitude": 41.3334542,
          "name": null
        },
        {
          "city": "Parker",
          "country": "United States",
          "state": "Arizona",
          "email": "diana.pacheco@asu.edu",
          "longitude": -114.0824451,
          "latitude": 34.2700153,
          "name": null
        },
        {
          "city": "Milwaukee",
          "country": "United States",
          "state": "Wisconsin",
          "email": "kkohler@unitedwaygmwc.org",
          "longitude": -87.922497,
          "latitude": 43.0349931,
          "name": null
        },
        {
          "city": "Milwaukee",
          "country": "United States",
          "state": "Wisconsin",
          "email": "gerald.fischer@mu.edu",
          "longitude": -87.922497,
          "latitude": 43.0349931,
          "name": null
        },
        {
          "city": "Minneapolis",
          "country": "United States",
          "state": "Minnesota",
          "email": "pathfinder289@gmail.com",
          "longitude": -93.2682177358,
          "latitude": 44.9706705,
          "name": null
        },
        {
          "city": "Mobile",
          "country": "United States",
          "state": "Alabama",
          "email": "justin102274@gmail.com",
          "longitude": -88.0430541,
          "latitude": 30.6943566,
          "name": null
        },
        {
          "city": "Yakima",
          "country": "United States",
          "state": "Washington",
          "email": "deidre.shaughnessy@gmail.com",
          "longitude": -120.5710757,
          "latitude": 46.6095846,
          "name": null
        },
        {
          "city": "Morgantown",
          "country": "United States",
          "state": "West Virginia",
          "email": "melissanutter@gmail.com",
          "longitude": -79.9559437,
          "latitude": 39.6296809,
          "name": "Melissa Nutter"
        },
        {
          "city": "Nashville",
          "country": "United States",
          "state": "Tennessee",
          "email": "vargasmegan1979@gmail.com",
          "longitude": -86.7743531,
          "latitude": 36.1622296,
          "name": "Megan Vargas"
        },
        {
          "city": "Nashville",
          "country": "United States",
          "state": "Tennessee",
          "email": "nhale@madisonchurchtn.org",
          "longitude": -86.7743531,
          "latitude": 36.1622296,
          "name": null
        },
        {
          "city": "Canastota",
          "country": "United States",
          "state": "New York",
          "email": "dirtykidcouchsurfingcoalition@gmail.com",
          "longitude": -75.8449946,
          "latitude": 43.1561681,
          "name": null
        },
        {
          "city": "Bayonne",
          "country": "United States",
          "state": "New Jersey",
          "email": "andrewlee524@gmail.com",
          "longitude": -74.1403164,
          "latitude": 40.6466686,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "marie_singletary@fitnyc.edu",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": null,
          "country": "United States",
          "state": "New York",
          "email": "alexsia77@hotmail.com",
          "longitude": -73.8017072,
          "latitude": 40.6421858,
          "name": "Alexandra Lopez de Haro"
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "corey@newyorkcityrelief.org",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "Bayonne",
          "country": "United States",
          "state": "New Jersey",
          "email": "halweiner@gmail.com",
          "longitude": -74.1403164,
          "latitude": 40.6466686,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "mdolaway@covenanthouse.org",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "denoixarnaud@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "devynbrook@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": "devyn skye brook"
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "syed.daniyal60@myhunter.cuny.edu",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "jmchen1115@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": "Justin Chen"
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "kristiek823@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "kristen.ablamsky@starthatching.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "milopacheco@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "wendyliuc@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "francesca.tucker92@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "Newark",
          "country": "United States",
          "state": "New Jersey",
          "email": "nathoo.a.ali@gmail.com",
          "longitude": -74.1723667,
          "latitude": 40.735657,
          "name": null
        },
        {
          "city": "Newington",
          "country": "United States",
          "state": "Connecticut",
          "email": "jessysica@aol.com",
          "longitude": -72.7292624365,
          "latitude": 41.68288305,
          "name": "Jessy Sica"
        },
        {
          "city": "Boston",
          "country": "United States",
          "state": "Massachusetts",
          "email": "sophiemagidson@gmail.com",
          "longitude": -71.0710941,
          "latitude": 42.3367555,
          "name": "Sophie Magidson"
        },
        {
          "city": "Norfolk",
          "country": "United States",
          "state": "Virginia",
          "email": "simpsonallison@yahoo.com",
          "longitude": -76.2929252,
          "latitude": 36.8462923,
          "name": null
        },
        {
          "city": "Norman",
          "country": "United States",
          "state": "Oklahoma",
          "email": "ferolnichole@gmail.com",
          "longitude": -97.4394816,
          "latitude": 35.2225717,
          "name": null
        },
        {
          "city": "Chicago",
          "country": "United States",
          "state": "Illinois",
          "email": "shortney0006@yahoo.com",
          "longitude": -87.7009815,
          "latitude": 41.9737858,
          "name": null
        },
        {
          "city": "Northport",
          "country": "United States",
          "state": "Alabama",
          "email": "aprils1973@gmail.com",
          "longitude": -87.5771286,
          "latitude": 33.2292976,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "adina@kkgs.org",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": null
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "aria.rivera@gmail.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": "Aria Rivera"
        },
        {
          "city": "New York",
          "country": "United States",
          "state": "New York",
          "email": "nybratd@aol.com",
          "longitude": -74.0060152,
          "latitude": 40.7127281,
          "name": "Dale Clausen"
        },
        {
          "city": "Oakland",
          "country": "United States",
          "state": "California",
          "email": "omoladeroddylcsw@gmail.com",
          "longitude": -122.2713563,
          "latitude": 37.8044557,
          "name": null
        },
        {
          "city": "Oakland",
          "country": "United States",
          "state": "California",
          "email": "angellemerced@gmail.com",
          "longitude": -122.2713563,
          "latitude": 37.8044557,
          "name": null
        },
        {
          "city": "Oceanside",
          "country": "United States",
          "state": "California",
          "email": "monique.combs@oside.us",
          "longitude": -117.3794834,
          "latitude": 33.1958696,
          "name": null
        },
        {
          "city": "Oklahoma City",
          "country": "United States",
          "state": "Oklahoma",
          "email": "carrie.blumert@gmail.com",
          "longitude": -97.5170536,
          "latitude": 35.4729886,
          "name": null
        },
        {
          "city": "Oklahoma City",
          "country": "United States",
          "state": "Oklahoma",
          "email": "ashton.boswell@gmail.com",
          "longitude": -97.5170536,
          "latitude": 35.4729886,
          "name": null
        },
        {
          "city": "Omaha",
          "country": "United States",
          "state": "Nebraska",
          "email": "sdevillier@me.com",
          "longitude": -95.9383758,
          "latitude": 41.2587459,
          "name": "Stephanie Devillier"
        },
        {
          "city": "Omaha",
          "country": "United States",
          "state": "Nebraska",
          "email": "janel.scott@databaseusa.com",
          "longitude": -95.9383758,
          "latitude": 41.2587459,
          "name": null
        },
        {
          "city": "Orlando",
          "country": "United States",
          "state": "Florida",
          "email": "abhill121811@gmail.com",
          "longitude": -81.4127841856,
          "latitude": 28.5479786,
          "name": null
        },
        {
          "city": "Orlando",
          "country": "United States",
          "state": "Florida",
          "email": "bvaughnbrandie@gmail.com",
          "longitude": -81.3790388,
          "latitude": 28.5421097,
          "name": null
        },
        {
          "city": "Orlando",
          "country": "United States",
          "state": "Florida",
          "email": "baredd1313@yahoo.com",
          "longitude": -81.3790388,
          "latitude": 28.5421097,
          "name": null
        },
        {
          "city": "Orlando",
          "country": "United States",
          "state": "Florida",
          "email": "vj42nato@gmail.com",
          "longitude": -81.3790388,
          "latitude": 28.5421097,
          "name": null
        },
        {
          "city": "Owensboro",
          "country": "United States",
          "state": "Kentucky",
          "email": "bmeloney@gmail.com",
          "longitude": -87.1133304,
          "latitude": 37.7742152,
          "name": null
        },
        {
          "city": "Oxnard",
          "country": "United States",
          "state": "California",
          "email": "mypicksandstones@gmail.com",
          "longitude": -119.1803818,
          "latitude": 34.1976308,
          "name": "Lori Krautkraemer"
        },
        {
          "city": "Paulsboro",
          "country": "United States",
          "state": "New Jersey",
          "email": "flauletta87@gmail.com",
          "longitude": -75.2404608,
          "latitude": 39.830391,
          "name": null
        },
        {
          "city": "Phoenix",
          "country": "United States",
          "state": "Arizona",
          "email": "cmerritt34@gmail.com",
          "longitude": -112.0773456,
          "latitude": 33.4485866,
          "name": null
        },
        {
          "city": "Phoenix",
          "country": "United States",
          "state": "Arizona",
          "email": "shaycd@msn.com",
          "longitude": -112.0773456,
          "latitude": 33.4485866,
          "name": null
        },
        {
          "city": "Phoenix",
          "country": "United States",
          "state": "Arizona",
          "email": "lzoller@shermanhoward.com",
          "longitude": -112.0773456,
          "latitude": 33.4485866,
          "name": null
        },
        {
          "city": "Phoenix",
          "country": "United States",
          "state": "Arizona",
          "email": "caroble1@asu.edu",
          "longitude": -112.0773456,
          "latitude": 33.4485866,
          "name": null
        },
        {
          "city": "Phoenix",
          "country": "United States",
          "state": "Arizona",
          "email": "emma.brooke.030412@gmail.com",
          "longitude": -112.0773456,
          "latitude": 33.4485866,
          "name": "Stephanie Patterson"
        },
        {
          "city": "Phoenix",
          "country": "United States",
          "state": "Arizona",
          "email": "azdawnmarie@gmail.com",
          "longitude": -112.0094217844,
          "latitude": 33.43291105,
          "name": null
        },
        {
          "city": "Graham",
          "country": "United States",
          "state": "Washington",
          "email": "karen.narrowbridge@gmail.com",
          "longitude": -122.2117983,
          "latitude": 47.0022547,
          "name": null
        },
        {
          "city": "Pittsburgh",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "bruce.thompson37@aol.com",
          "longitude": -79.9900861,
          "latitude": 40.4416941,
          "name": "Bruce Thompson"
        },
        {
          "city": "Pittsburgh",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "stephanie.meyer@alleghenycounty.us",
          "longitude": -79.9900861,
          "latitude": 40.4416941,
          "name": null
        },
        {
          "city": "Pittsburgh",
          "country": "United States",
          "state": "Pennsylvania",
          "email": "sydneyskyline26@aol.com",
          "longitude": -79.9900861,
          "latitude": 40.4416941,
          "name": null
        },
        {
          "city": "Plymouth",
          "country": "United States",
          "state": "Michigan",
          "email": "aburchar@umich.edu",
          "longitude": -83.4675021,
          "latitude": 42.3712,
          "name": null
        },
        {
          "city": "Pomona",
          "country": "United States",
          "state": "California",
          "email": "vmccoy45@yahoo.com",
          "longitude": -117.7517496,
          "latitude": 34.0553813,
          "name": null
        },
        {
          "city": "Port Jefferson Station",
          "country": "United States",
          "state": "New York",
          "email": "capricekid@aol.com",
          "longitude": -73.0691257,
          "latitude": 40.9465118,
          "name": null
        },
        {
          "city": "Port Angeles",
          "country": "United States",
          "state": "Washington",
          "email": "allview@olypen.com",
          "longitude": -123.4307413,
          "latitude": 48.118146,
          "name": null
        },
        {
          "city": "Port Washington",
          "country": "United States",
          "state": "New York",
          "email": "jlfencer4@yahoo.com",
          "longitude": -73.6981858,
          "latitude": 40.8256561,
          "name": null
        },
        {
          "city": "Portland",
          "country": "United States",
          "state": "Oregon",
          "email": "vahid.brown@gmail.com",
          "longitude": -122.6741949,
          "latitude": 45.5202471,
          "name": null
        },
        {
          "city": "Tucson",
          "country": "United States",
          "state": "Arizona",
          "email": "lesgale@pdx.edu",
          "longitude": -110.8397632,
          "latitude": 32.1800622,
          "name": null
        },
        {
          "city": "Portland",
          "country": "United States",
          "state": "Oregon",
          "email": "tpersons@lshigh.org",
          "longitude": -122.6741949,
          "latitude": 45.5202471,
          "name": null
        },
        {
          "city": "Portland",
          "country": "United States",
          "state": "Oregon",
          "email": "dmj8000@gmail.com",
          "longitude": -122.6741949,
          "latitude": 45.5202471,
          "name": null
        },
        {
          "city": "Portland",
          "country": "United States",
          "state": "Oregon",
          "email": "deanaaltman@yahoo.com",
          "longitude": -122.6741949,
          "latitude": 45.5202471,
          "name": null
        },
        {
          "city": "Portland",
          "country": "United States",
          "state": "Oregon",
          "email": "armstrongdn@gmail.com",
          "longitude": -122.6741949,
          "latitude": 45.5202471,
          "name": null
        },
        {
          "city": "Portland",
          "country": "United States",
          "state": "Oregon",
          "email": "renecrossis@gmail.com",
          "longitude": -122.6741949,
          "latitude": 45.5202471,
          "name": null
        },
        {
          "city": "Glocester",
          "country": "United States",
          "state": "Rhode Island",
          "email": "hlx0903@gmail.com",
          "longitude": -71.5814834,
          "latitude": 41.8677428,
          "name": null
        },
        {
          "city": "Manchester Township",
          "country": "United States",
          "state": "New Jersey",
          "email": "reginald85green@gmail.com",
          "longitude": -74.371223,
          "latitude": 39.954196,
          "name": null
        },
        {
          "city": "Redding",
          "country": "United States",
          "state": "California",
          "email": "kyramichel30@gmail.com",
          "longitude": -122.3916754,
          "latitude": 40.5863563,
          "name": "Kyra Michel"
        },
        {
          "city": "Reno",
          "country": "United States",
          "state": "Nevada",
          "email": "ashleemforman13@gmail.com",
          "longitude": -119.8136744,
          "latitude": 39.52927,
          "name": null
        },
        {
          "city": "Reno",
          "country": "United States",
          "state": "Nevada",
          "email": "joeart@pacbell.net",
          "longitude": -119.8136744,
          "latitude": 39.52927,
          "name": null
        },
        {
          "city": "Richmond",
          "country": "United States",
          "state": "Virginia",
          "email": "mickeymooreads@gmail.com",
          "longitude": -77.43428,
          "latitude": 37.5385087,
          "name": null
        }
      ]);
    });
};
