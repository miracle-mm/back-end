
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('partnerServices').del()
    .then(function () {
      // Inserts seed entries
      return knex('partnerServices').insert([
        {"partner_id":1,"service_id":1},{"partner_id":2,"service_id":1},{"partner_id":3,"service_id":1},{"partner_id":4,"service_id":1},{"partner_id":5,"service_id":1},{"partner_id":5,"service_id":2},{"partner_id":6,"service_id":1},{"partner_id":6,"service_id":3},{"partner_id":7,"service_id":1},{"partner_id":8,"service_id":1},{"partner_id":9,"service_id":3},{"partner_id":9,"service_id":1},{"partner_id":10,"service_id":1},{"partner_id":11,"service_id":4},{"partner_id":11,"service_id":1},{"partner_id":12,"service_id":1},{"partner_id":13,"service_id":1},{"partner_id":14,"service_id":1},{"partner_id":15,"service_id":4},{"partner_id":15,"service_id":1},{"partner_id":16,"service_id":3},{"partner_id":16,"service_id":1},{"partner_id":17,"service_id":3},{"partner_id":17,"service_id":1},{"partner_id":18,"service_id":1},{"partner_id":19,"service_id":1},{"partner_id":19,"service_id":3},{"partner_id":20,"service_id":1},{"partner_id":21,"service_id":1},{"partner_id":22,"service_id":1},{"partner_id":22,"service_id":3},{"partner_id":23,"service_id":1},{"partner_id":24,"service_id":1},{"partner_id":24,"service_id":3},{"partner_id":25,"service_id":5},{"partner_id":25,"service_id":1},{"partner_id":25,"service_id":3},{"partner_id":25,"service_id":4},{"partner_id":25,"service_id":2},{"partner_id":26,"service_id":3},{"partner_id":26,"service_id":1},{"partner_id":27,"service_id":5},{"partner_id":27,"service_id":1},{"partner_id":28,"service_id":1},{"partner_id":29,"service_id":3},{"partner_id":29,"service_id":1},{"partner_id":30,"service_id":2},{"partner_id":30,"service_id":1},{"partner_id":30,"service_id":3},{"partner_id":31,"service_id":1},{"partner_id":31,"service_id":4},{"partner_id":32,"service_id":3},{"partner_id":32,"service_id":1},{"partner_id":33,"service_id":1},{"partner_id":34,"service_id":3},{"partner_id":34,"service_id":6},{"partner_id":34,"service_id":1},{"partner_id":34,"service_id":5},{"partner_id":34,"service_id":2},{"partner_id":34,"service_id":4},{"partner_id":35,"service_id":1},{"partner_id":36,"service_id":1},{"partner_id":37,"service_id":1},{"partner_id":38,"service_id":1},{"partner_id":38,"service_id":3},{"partner_id":39,"service_id":1},{"partner_id":40,"service_id":1},{"partner_id":41,"service_id":2},{"partner_id":41,"service_id":3},{"partner_id":41,"service_id":4},{"partner_id":42,"service_id":1},{"partner_id":42,"service_id":3},{"partner_id":43,"service_id":3},{"partner_id":43,"service_id":1},{"partner_id":44,"service_id":1},{"partner_id":45,"service_id":1},{"partner_id":45,"service_id":3},{"partner_id":46,"service_id":3},{"partner_id":46,"service_id":1},{"partner_id":47,"service_id":3},{"partner_id":47,"service_id":1},{"partner_id":47,"service_id":5},{"partner_id":48,"service_id":2},{"partner_id":48,"service_id":1},{"partner_id":48,"service_id":4},{"partner_id":49,"service_id":1},{"partner_id":50,"service_id":7},{"partner_id":50,"service_id":3},{"partner_id":50,"service_id":1},{"partner_id":50,"service_id":5},{"partner_id":51,"service_id":3},{"partner_id":51,"service_id":1},{"partner_id":52,"service_id":3},{"partner_id":52,"service_id":1},{"partner_id":52,"service_id":7},{"partner_id":53,"service_id":1},{"partner_id":53,"service_id":3},{"partner_id":54,"service_id":3},{"partner_id":54,"service_id":1},{"partner_id":55,"service_id":3},{"partner_id":55,"service_id":1},{"partner_id":56,"service_id":1},{"partner_id":56,"service_id":3},{"partner_id":58,"service_id":3},{"partner_id":58,"service_id":5},{"partner_id":58,"service_id":1},{"partner_id":58,"service_id":2},{"partner_id":59,"service_id":3},{"partner_id":59,"service_id":1},{"partner_id":60,"service_id":1},{"partner_id":60,"service_id":3},{"partner_id":61,"service_id":1},{"partner_id":62,"service_id":3},{"partner_id":62,"service_id":5},{"partner_id":62,"service_id":1},{"partner_id":63,"service_id":1},{"partner_id":63,"service_id":3},{"partner_id":64,"service_id":3},{"partner_id":64,"service_id":1},{"partner_id":65,"service_id":1},{"partner_id":66,"service_id":1},{"partner_id":67,"service_id":1},{"partner_id":68,"service_id":3},{"partner_id":68,"service_id":2},{"partner_id":68,"service_id":4},{"partner_id":68,"service_id":1},{"partner_id":69,"service_id":1},{"partner_id":69,"service_id":3},{"partner_id":70,"service_id":3},{"partner_id":70,"service_id":4},{"partner_id":70,"service_id":2},{"partner_id":71,"service_id":1},{"partner_id":72,"service_id":3},{"partner_id":72,"service_id":5},{"partner_id":72,"service_id":7},{"partner_id":72,"service_id":4},{"partner_id":72,"service_id":1},{"partner_id":73,"service_id":3},{"partner_id":73,"service_id":2},{"partner_id":73,"service_id":1},{"partner_id":74,"service_id":3},{"partner_id":74,"service_id":1},{"partner_id":75,"service_id":1},{"partner_id":75,"service_id":3},{"partner_id":76,"service_id":3},{"partner_id":76,"service_id":4},{"partner_id":76,"service_id":1},{"partner_id":76,"service_id":5},{"partner_id":76,"service_id":7},{"partner_id":77,"service_id":3},{"partner_id":77,"service_id":1},{"partner_id":78,"service_id":1},{"partner_id":79,"service_id":3},{"partner_id":79,"service_id":1},{"partner_id":80,"service_id":3},{"partner_id":80,"service_id":1},{"partner_id":81,"service_id":1},{"partner_id":81,"service_id":7},{"partner_id":82,"service_id":5},{"partner_id":82,"service_id":3},{"partner_id":82,"service_id":1},{"partner_id":82,"service_id":2},{"partner_id":83,"service_id":3},{"partner_id":83,"service_id":4},{"partner_id":83,"service_id":2},{"partner_id":83,"service_id":1},{"partner_id":84,"service_id":3},{"partner_id":84,"service_id":5},{"partner_id":84,"service_id":2},{"partner_id":84,"service_id":1},{"partner_id":85,"service_id":4},{"partner_id":85,"service_id":1},{"partner_id":85,"service_id":5},{"partner_id":85,"service_id":3},{"partner_id":86,"service_id":3},{"partner_id":86,"service_id":1},{"partner_id":87,"service_id":1},{"partner_id":88,"service_id":1},{"partner_id":89,"service_id":1},{"partner_id":89,"service_id":7},{"partner_id":89,"service_id":4},{"partner_id":89,"service_id":3},{"partner_id":89,"service_id":2},{"partner_id":89,"service_id":5},{"partner_id":90,"service_id":3},{"partner_id":90,"service_id":1},{"partner_id":91,"service_id":3},{"partner_id":91,"service_id":1},{"partner_id":92,"service_id":3},{"partner_id":92,"service_id":2},{"partner_id":92,"service_id":1},{"partner_id":92,"service_id":4},{"partner_id":93,"service_id":1},{"partner_id":93,"service_id":3},{"partner_id":94,"service_id":1},{"partner_id":94,"service_id":3},{"partner_id":95,"service_id":3},{"partner_id":95,"service_id":1},{"partner_id":95,"service_id":5},{"partner_id":96,"service_id":1},{"partner_id":96,"service_id":2},{"partner_id":96,"service_id":3},{"partner_id":97,"service_id":1},{"partner_id":97,"service_id":3},{"partner_id":98,"service_id":5},{"partner_id":98,"service_id":3},{"partner_id":98,"service_id":2},{"partner_id":98,"service_id":1},{"partner_id":99,"service_id":3},{"partner_id":99,"service_id":1},{"partner_id":100,"service_id":1},{"partner_id":100,"service_id":3},{"partner_id":100,"service_id":4},{"partner_id":100,"service_id":5},{"partner_id":101,"service_id":1},{"partner_id":101,"service_id":3},{"partner_id":102,"service_id":7},{"partner_id":102,"service_id":1},{"partner_id":102,"service_id":3},{"partner_id":103,"service_id":3},{"partner_id":103,"service_id":1},{"partner_id":104,"service_id":3},{"partner_id":104,"service_id":2},{"partner_id":104,"service_id":4},{"partner_id":104,"service_id":1},{"partner_id":105,"service_id":1},{"partner_id":106,"service_id":5},{"partner_id":106,"service_id":1},{"partner_id":106,"service_id":3},{"partner_id":107,"service_id":1},{"partner_id":107,"service_id":3},{"partner_id":108,"service_id":7},{"partner_id":108,"service_id":1},{"partner_id":108,"service_id":3},{"partner_id":109,"service_id":3},{"partner_id":109,"service_id":1},{"partner_id":110,"service_id":1},{"partner_id":110,"service_id":3},{"partner_id":111,"service_id":1},{"partner_id":111,"service_id":3},{"partner_id":112,"service_id":5},{"partner_id":112,"service_id":3},{"partner_id":112,"service_id":1},{"partner_id":113,"service_id":1},{"partner_id":113,"service_id":3},{"partner_id":114,"service_id":3},{"partner_id":114,"service_id":2},{"partner_id":114,"service_id":1},{"partner_id":115,"service_id":1},{"partner_id":115,"service_id":3},{"partner_id":115,"service_id":5},{"partner_id":116,"service_id":5},{"partner_id":116,"service_id":3},{"partner_id":116,"service_id":1},{"partner_id":117,"service_id":4},{"partner_id":117,"service_id":3},{"partner_id":117,"service_id":2},{"partner_id":118,"service_id":3},{"partner_id":118,"service_id":1},{"partner_id":119,"service_id":1},{"partner_id":119,"service_id":3},{"partner_id":120,"service_id":3},{"partner_id":120,"service_id":1},{"partner_id":121,"service_id":1},{"partner_id":121,"service_id":3},{"partner_id":122,"service_id":1},{"partner_id":123,"service_id":5},{"partner_id":123,"service_id":1},{"partner_id":123,"service_id":7},{"partner_id":123,"service_id":2},{"partner_id":124,"service_id":3},{"partner_id":124,"service_id":1},{"partner_id":124,"service_id":7},{"partner_id":125,"service_id":1},{"partner_id":125,"service_id":5},{"partner_id":125,"service_id":7},{"partner_id":125,"service_id":2},{"partner_id":126,"service_id":3},{"partner_id":126,"service_id":1},{"partner_id":126,"service_id":5},{"partner_id":127,"service_id":1},{"partner_id":127,"service_id":7},{"partner_id":127,"service_id":5},{"partner_id":127,"service_id":3},{"partner_id":128,"service_id":3},{"partner_id":128,"service_id":1},{"partner_id":129,"service_id":3},{"partner_id":129,"service_id":7},{"partner_id":129,"service_id":1},{"partner_id":130,"service_id":3},{"partner_id":130,"service_id":1},{"partner_id":131,"service_id":1},{"partner_id":131,"service_id":3},{"partner_id":132,"service_id":1},{"partner_id":132,"service_id":3},{"partner_id":133,"service_id":1},{"partner_id":133,"service_id":2},{"partner_id":133,"service_id":3},{"partner_id":134,"service_id":3},{"partner_id":134,"service_id":1},{"partner_id":135,"service_id":1},{"partner_id":135,"service_id":3},{"partner_id":136,"service_id":7},{"partner_id":136,"service_id":5},{"partner_id":136,"service_id":1},{"partner_id":136,"service_id":2},{"partner_id":137,"service_id":3},{"partner_id":137,"service_id":1},{"partner_id":138,"service_id":1},{"partner_id":138,"service_id":3},{"partner_id":139,"service_id":1},{"partner_id":139,"service_id":3},{"partner_id":140,"service_id":1},{"partner_id":140,"service_id":3},{"partner_id":141,"service_id":1},{"partner_id":142,"service_id":1},{"partner_id":142,"service_id":3},{"partner_id":143,"service_id":3},{"partner_id":143,"service_id":1},{"partner_id":144,"service_id":3},{"partner_id":144,"service_id":1},{"partner_id":145,"service_id":3},{"partner_id":145,"service_id":1},{"partner_id":146,"service_id":4},{"partner_id":146,"service_id":2},{"partner_id":146,"service_id":3},{"partner_id":147,"service_id":5},{"partner_id":147,"service_id":1},{"partner_id":147,"service_id":3},{"partner_id":148,"service_id":1},{"partner_id":149,"service_id":3},{"partner_id":149,"service_id":1},{"partner_id":149,"service_id":2},{"partner_id":150,"service_id":1},{"partner_id":150,"service_id":3},{"partner_id":151,"service_id":3},{"partner_id":151,"service_id":1},{"partner_id":151,"service_id":7},{"partner_id":151,"service_id":5},{"partner_id":152,"service_id":3},{"partner_id":152,"service_id":1},{"partner_id":153,"service_id":1},{"partner_id":153,"service_id":3},{"partner_id":154,"service_id":1},{"partner_id":154,"service_id":3},{"partner_id":155,"service_id":1},{"partner_id":156,"service_id":1},{"partner_id":156,"service_id":3},{"partner_id":156,"service_id":7},{"partner_id":156,"service_id":5},{"partner_id":157,"service_id":1},{"partner_id":157,"service_id":3},{"partner_id":158,"service_id":1},{"partner_id":158,"service_id":3},{"partner_id":159,"service_id":1},{"partner_id":160,"service_id":1},{"partner_id":161,"service_id":1},{"partner_id":161,"service_id":3},{"partner_id":162,"service_id":1},{"partner_id":163,"service_id":2},{"partner_id":163,"service_id":1},{"partner_id":163,"service_id":3},{"partner_id":164,"service_id":1},{"partner_id":165,"service_id":1},{"partner_id":166,"service_id":1},{"partner_id":167,"service_id":1},{"partner_id":167,"service_id":3},{"partner_id":168,"service_id":2},{"partner_id":168,"service_id":1},{"partner_id":168,"service_id":3},{"partner_id":169,"service_id":1},{"partner_id":169,"service_id":3},{"partner_id":170,"service_id":7},{"partner_id":170,"service_id":1},{"partner_id":170,"service_id":3},{"partner_id":171,"service_id":1},{"partner_id":171,"service_id":5},{"partner_id":171,"service_id":3},{"partner_id":171,"service_id":4},{"partner_id":172,"service_id":3},{"partner_id":172,"service_id":4},{"partner_id":172,"service_id":2},{"partner_id":172,"service_id":1},{"partner_id":173,"service_id":1},{"partner_id":174,"service_id":3},{"partner_id":174,"service_id":1},{"partner_id":175,"service_id":4},{"partner_id":175,"service_id":2},{"partner_id":175,"service_id":3},{"partner_id":176,"service_id":1},{"partner_id":176,"service_id":3},{"partner_id":176,"service_id":5},{"partner_id":177,"service_id":3},{"partner_id":177,"service_id":1},{"partner_id":178,"service_id":7},{"partner_id":178,"service_id":1},{"partner_id":178,"service_id":4},{"partner_id":178,"service_id":3},{"partner_id":179,"service_id":5},{"partner_id":179,"service_id":1},{"partner_id":179,"service_id":2},{"partner_id":179,"service_id":7},{"partner_id":180,"service_id":1},{"partner_id":181,"service_id":1},{"partner_id":182,"service_id":3},{"partner_id":182,"service_id":1},{"partner_id":183,"service_id":1},{"partner_id":183,"service_id":3},{"partner_id":183,"service_id":2},{"partner_id":184,"service_id":3},{"partner_id":184,"service_id":1},{"partner_id":184,"service_id":5},{"partner_id":184,"service_id":4},{"partner_id":184,"service_id":2},{"partner_id":185,"service_id":1},{"partner_id":186,"service_id":3},{"partner_id":186,"service_id":1},{"partner_id":187,"service_id":1},{"partner_id":187,"service_id":3},{"partner_id":187,"service_id":5},{"partner_id":188,"service_id":1},{"partner_id":188,"service_id":3},{"partner_id":189,"service_id":7},{"partner_id":189,"service_id":1},{"partner_id":189,"service_id":3},{"partner_id":189,"service_id":5},{"partner_id":189,"service_id":4},{"partner_id":190,"service_id":3},{"partner_id":190,"service_id":1},{"partner_id":191,"service_id":4},{"partner_id":191,"service_id":1},{"partner_id":192,"service_id":3},{"partner_id":192,"service_id":1},{"partner_id":193,"service_id":1},{"partner_id":193,"service_id":3},{"partner_id":194,"service_id":1},{"partner_id":195,"service_id":5},{"partner_id":195,"service_id":3},{"partner_id":195,"service_id":1},{"partner_id":196,"service_id":1},{"partner_id":196,"service_id":3},{"partner_id":197,"service_id":1},{"partner_id":197,"service_id":3},{"partner_id":198,"service_id":1},{"partner_id":198,"service_id":3},{"partner_id":199,"service_id":1},{"partner_id":199,"service_id":3},{"partner_id":200,"service_id":7},{"partner_id":200,"service_id":3},{"partner_id":200,"service_id":1},{"partner_id":201,"service_id":1},{"partner_id":201,"service_id":3},{"partner_id":202,"service_id":3},{"partner_id":202,"service_id":1},{"partner_id":202,"service_id":5},{"partner_id":203,"service_id":1},{"partner_id":204,"service_id":1},{"partner_id":204,"service_id":3},{"partner_id":205,"service_id":3},{"partner_id":205,"service_id":1},{"partner_id":206,"service_id":1},{"partner_id":207,"service_id":1},{"partner_id":207,"service_id":5},{"partner_id":208,"service_id":2},{"partner_id":208,"service_id":5},{"partner_id":208,"service_id":3},{"partner_id":208,"service_id":7},{"partner_id":208,"service_id":4},{"partner_id":208,"service_id":1},{"partner_id":209,"service_id":1},{"partner_id":209,"service_id":5},{"partner_id":209,"service_id":3},{"partner_id":210,"service_id":3},{"partner_id":210,"service_id":5},{"partner_id":210,"service_id":1},{"partner_id":211,"service_id":5},{"partner_id":211,"service_id":3},{"partner_id":211,"service_id":1},{"partner_id":212,"service_id":5},{"partner_id":212,"service_id":3},{"partner_id":212,"service_id":1},{"partner_id":213,"service_id":1},{"partner_id":213,"service_id":3},{"partner_id":214,"service_id":1},{"partner_id":214,"service_id":3},{"partner_id":215,"service_id":3},{"partner_id":215,"service_id":5},{"partner_id":215,"service_id":1},{"partner_id":216,"service_id":1},{"partner_id":217,"service_id":3},{"partner_id":217,"service_id":1},{"partner_id":218,"service_id":1},{"partner_id":219,"service_id":3},{"partner_id":219,"service_id":1},{"partner_id":220,"service_id":3},{"partner_id":220,"service_id":1},{"partner_id":221,"service_id":3},{"partner_id":221,"service_id":1},{"partner_id":222,"service_id":1},{"partner_id":222,"service_id":3},{"partner_id":223,"service_id":1},{"partner_id":223,"service_id":3},{"partner_id":224,"service_id":1},{"partner_id":224,"service_id":3},{"partner_id":225,"service_id":1},{"partner_id":225,"service_id":3},{"partner_id":226,"service_id":1},{"partner_id":226,"service_id":3},{"partner_id":227,"service_id":1},{"partner_id":228,"service_id":1},{"partner_id":228,"service_id":3},{"partner_id":229,"service_id":3},{"partner_id":229,"service_id":1},{"partner_id":230,"service_id":1},{"partner_id":231,"service_id":1},{"partner_id":231,"service_id":3},{"partner_id":232,"service_id":1},{"partner_id":233,"service_id":1},{"partner_id":233,"service_id":3},{"partner_id":234,"service_id":1},{"partner_id":235,"service_id":1},{"partner_id":235,"service_id":3},{"partner_id":236,"service_id":3},{"partner_id":236,"service_id":1},{"partner_id":237,"service_id":1},{"partner_id":237,"service_id":3},{"partner_id":238,"service_id":2},{"partner_id":238,"service_id":4},{"partner_id":238,"service_id":7},{"partner_id":238,"service_id":1},{"partner_id":238,"service_id":5},{"partner_id":239,"service_id":5},{"partner_id":239,"service_id":3},{"partner_id":239,"service_id":1},{"partner_id":239,"service_id":4},{"partner_id":240,"service_id":1},{"partner_id":241,"service_id":1},{"partner_id":242,"service_id":3},{"partner_id":242,"service_id":1},{"partner_id":242,"service_id":7},{"partner_id":242,"service_id":5},{"partner_id":243,"service_id":1},{"partner_id":244,"service_id":3},{"partner_id":244,"service_id":5},{"partner_id":244,"service_id":1},{"partner_id":245,"service_id":1},{"partner_id":245,"service_id":3},{"partner_id":246,"service_id":3},{"partner_id":246,"service_id":5},{"partner_id":246,"service_id":1},{"partner_id":247,"service_id":3},{"partner_id":247,"service_id":1},{"partner_id":248,"service_id":1},{"partner_id":248,"service_id":3},{"partner_id":249,"service_id":1},{"partner_id":250,"service_id":1},{"partner_id":250,"service_id":3},{"partner_id":251,"service_id":1},{"partner_id":251,"service_id":3},{"partner_id":252,"service_id":1},{"partner_id":252,"service_id":3},{"partner_id":253,"service_id":1},{"partner_id":253,"service_id":3},{"partner_id":254,"service_id":1},{"partner_id":254,"service_id":7},{"partner_id":254,"service_id":3},{"partner_id":255,"service_id":1},{"partner_id":255,"service_id":3},{"partner_id":256,"service_id":1},{"partner_id":257,"service_id":1},{"partner_id":257,"service_id":3},{"partner_id":257,"service_id":5},{"partner_id":258,"service_id":1},{"partner_id":258,"service_id":2},{"partner_id":258,"service_id":3},{"partner_id":259,"service_id":7},{"partner_id":259,"service_id":3},{"partner_id":259,"service_id":1},{"partner_id":260,"service_id":1},{"partner_id":261,"service_id":5},{"partner_id":261,"service_id":1},{"partner_id":261,"service_id":3},{"partner_id":262,"service_id":1},{"partner_id":263,"service_id":1},{"partner_id":263,"service_id":3},{"partner_id":264,"service_id":7},{"partner_id":264,"service_id":3},{"partner_id":264,"service_id":2},{"partner_id":264,"service_id":1},{"partner_id":265,"service_id":1},{"partner_id":265,"service_id":3},{"partner_id":266,"service_id":1},{"partner_id":266,"service_id":3},{"partner_id":267,"service_id":1},{"partner_id":267,"service_id":3},{"partner_id":268,"service_id":1},{"partner_id":268,"service_id":2},{"partner_id":269,"service_id":1},{"partner_id":270,"service_id":1},{"partner_id":270,"service_id":3},{"partner_id":271,"service_id":1},{"partner_id":271,"service_id":2},{"partner_id":271,"service_id":3},{"partner_id":272,"service_id":1},{"partner_id":273,"service_id":7},{"partner_id":273,"service_id":3},{"partner_id":273,"service_id":1},{"partner_id":274,"service_id":1},{"partner_id":274,"service_id":3},{"partner_id":275,"service_id":3},{"partner_id":275,"service_id":1},{"partner_id":276,"service_id":3},{"partner_id":276,"service_id":1},{"partner_id":277,"service_id":3},{"partner_id":277,"service_id":1},{"partner_id":278,"service_id":1},{"partner_id":278,"service_id":3},{"partner_id":279,"service_id":1},{"partner_id":280,"service_id":3},{"partner_id":280,"service_id":1},{"partner_id":280,"service_id":5},{"partner_id":280,"service_id":7},{"partner_id":281,"service_id":1},{"partner_id":281,"service_id":7},{"partner_id":281,"service_id":3},{"partner_id":281,"service_id":4},{"partner_id":282,"service_id":1},{"partner_id":282,"service_id":3},{"partner_id":283,"service_id":3},{"partner_id":283,"service_id":1},{"partner_id":284,"service_id":3},{"partner_id":284,"service_id":1},{"partner_id":285,"service_id":3},{"partner_id":285,"service_id":1},{"partner_id":285,"service_id":5},{"partner_id":286,"service_id":2},{"partner_id":286,"service_id":1},{"partner_id":286,"service_id":3},{"partner_id":287,"service_id":1},{"partner_id":287,"service_id":3},{"partner_id":288,"service_id":1},{"partner_id":288,"service_id":3},{"partner_id":289,"service_id":3},{"partner_id":289,"service_id":1},{"partner_id":290,"service_id":1},{"partner_id":290,"service_id":3},{"partner_id":291,"service_id":4},{"partner_id":291,"service_id":2},{"partner_id":291,"service_id":3},{"partner_id":292,"service_id":3},{"partner_id":292,"service_id":1},{"partner_id":293,"service_id":5},{"partner_id":293,"service_id":3},{"partner_id":293,"service_id":1},{"partner_id":294,"service_id":1},{"partner_id":294,"service_id":7},{"partner_id":294,"service_id":3},{"partner_id":295,"service_id":3},{"partner_id":295,"service_id":1},{"partner_id":295,"service_id":5},{"partner_id":296,"service_id":3},{"partner_id":296,"service_id":1},{"partner_id":297,"service_id":1},{"partner_id":297,"service_id":3},{"partner_id":298,"service_id":3},{"partner_id":298,"service_id":1},{"partner_id":299,"service_id":1},{"partner_id":299,"service_id":3},{"partner_id":300,"service_id":7},{"partner_id":300,"service_id":3},{"partner_id":300,"service_id":1},{"partner_id":301,"service_id":1},{"partner_id":302,"service_id":3},{"partner_id":302,"service_id":5},{"partner_id":302,"service_id":1},{"partner_id":303,"service_id":7},{"partner_id":303,"service_id":1},{"partner_id":303,"service_id":2},{"partner_id":303,"service_id":3},{"partner_id":304,"service_id":1},{"partner_id":305,"service_id":1},{"partner_id":305,"service_id":5},{"partner_id":305,"service_id":3},{"partner_id":306,"service_id":3},{"partner_id":306,"service_id":4},{"partner_id":306,"service_id":2},{"partner_id":307,"service_id":3},{"partner_id":307,"service_id":1},{"partner_id":308,"service_id":1},{"partner_id":308,"service_id":3},{"partner_id":309,"service_id":3},{"partner_id":309,"service_id":1},{"partner_id":310,"service_id":1},{"partner_id":310,"service_id":5},{"partner_id":310,"service_id":3},{"partner_id":311,"service_id":1},{"partner_id":311,"service_id":3},{"partner_id":312,"service_id":3},{"partner_id":312,"service_id":1},{"partner_id":312,"service_id":2},{"partner_id":313,"service_id":2},{"partner_id":313,"service_id":5},{"partner_id":313,"service_id":4},{"partner_id":313,"service_id":3},{"partner_id":313,"service_id":1},{"partner_id":314,"service_id":3},{"partner_id":314,"service_id":1},{"partner_id":315,"service_id":1},{"partner_id":315,"service_id":3},{"partner_id":316,"service_id":1},{"partner_id":316,"service_id":3},{"partner_id":317,"service_id":2},{"partner_id":317,"service_id":1},{"partner_id":317,"service_id":4},{"partner_id":317,"service_id":3},{"partner_id":318,"service_id":1},{"partner_id":318,"service_id":3},{"partner_id":319,"service_id":1},{"partner_id":320,"service_id":7},{"partner_id":320,"service_id":1},{"partner_id":320,"service_id":3},{"partner_id":321,"service_id":3},{"partner_id":321,"service_id":1},{"partner_id":322,"service_id":3},{"partner_id":322,"service_id":1},{"partner_id":323,"service_id":3},{"partner_id":323,"service_id":1},{"partner_id":324,"service_id":1},{"partner_id":324,"service_id":5},{"partner_id":324,"service_id":2},{"partner_id":324,"service_id":3},{"partner_id":325,"service_id":3},{"partner_id":325,"service_id":1},{"partner_id":326,"service_id":2},{"partner_id":326,"service_id":5},{"partner_id":326,"service_id":1},{"partner_id":326,"service_id":3},{"partner_id":327,"service_id":1},{"partner_id":327,"service_id":3},{"partner_id":328,"service_id":1},{"partner_id":329,"service_id":1},{"partner_id":329,"service_id":2},{"partner_id":329,"service_id":5},{"partner_id":329,"service_id":3},{"partner_id":330,"service_id":1},{"partner_id":331,"service_id":2},{"partner_id":331,"service_id":3},{"partner_id":331,"service_id":4},{"partner_id":331,"service_id":1},{"partner_id":332,"service_id":3},{"partner_id":332,"service_id":7},{"partner_id":332,"service_id":1},{"partner_id":332,"service_id":4},{"partner_id":333,"service_id":1},{"partner_id":334,"service_id":1},{"partner_id":334,"service_id":2},{"partner_id":334,"service_id":3},{"partner_id":334,"service_id":4},{"partner_id":335,"service_id":5},{"partner_id":335,"service_id":3},{"partner_id":335,"service_id":1},{"partner_id":336,"service_id":1},{"partner_id":336,"service_id":5},{"partner_id":336,"service_id":2},{"partner_id":336,"service_id":3},{"partner_id":337,"service_id":2},{"partner_id":337,"service_id":1},{"partner_id":337,"service_id":5},{"partner_id":337,"service_id":7},{"partner_id":337,"service_id":3},{"partner_id":338,"service_id":1},{"partner_id":339,"service_id":1},{"partner_id":340,"service_id":1},{"partner_id":341,"service_id":1},{"partner_id":342,"service_id":1},{"partner_id":342,"service_id":4},{"partner_id":342,"service_id":7},{"partner_id":342,"service_id":5},{"partner_id":342,"service_id":3},{"partner_id":343,"service_id":3},{"partner_id":343,"service_id":1},{"partner_id":343,"service_id":7},{"partner_id":344,"service_id":3},{"partner_id":344,"service_id":1},{"partner_id":344,"service_id":7},{"partner_id":345,"service_id":7},{"partner_id":345,"service_id":1},{"partner_id":345,"service_id":5},{"partner_id":345,"service_id":3},{"partner_id":346,"service_id":1},{"partner_id":347,"service_id":1},{"partner_id":348,"service_id":1},{"partner_id":348,"service_id":3},{"partner_id":349,"service_id":1},{"partner_id":349,"service_id":3},{"partner_id":349,"service_id":7},{"partner_id":350,"service_id":1},{"partner_id":350,"service_id":4},{"partner_id":350,"service_id":2},{"partner_id":350,"service_id":3},{"partner_id":351,"service_id":1},{"partner_id":352,"service_id":3},{"partner_id":352,"service_id":5},{"partner_id":352,"service_id":1},{"partner_id":353,"service_id":3},{"partner_id":353,"service_id":1},{"partner_id":354,"service_id":1},{"partner_id":354,"service_id":3},{"partner_id":355,"service_id":4},{"partner_id":355,"service_id":3},{"partner_id":355,"service_id":5},{"partner_id":355,"service_id":1},{"partner_id":356,"service_id":1},{"partner_id":356,"service_id":3},{"partner_id":356,"service_id":2},{"partner_id":357,"service_id":1},{"partner_id":357,"service_id":3},{"partner_id":358,"service_id":7},{"partner_id":358,"service_id":1},{"partner_id":358,"service_id":3},{"partner_id":359,"service_id":1},{"partner_id":359,"service_id":3},{"partner_id":360,"service_id":2},{"partner_id":360,"service_id":1},{"partner_id":360,"service_id":3},{"partner_id":361,"service_id":3},{"partner_id":361,"service_id":1},{"partner_id":362,"service_id":1},{"partner_id":363,"service_id":1},{"partner_id":364,"service_id":3},{"partner_id":364,"service_id":1},{"partner_id":365,"service_id":3},{"partner_id":365,"service_id":1},{"partner_id":366,"service_id":3},{"partner_id":366,"service_id":4},{"partner_id":366,"service_id":2},{"partner_id":367,"service_id":3},{"partner_id":367,"service_id":1},{"partner_id":367,"service_id":2},{"partner_id":368,"service_id":1},{"partner_id":368,"service_id":2},{"partner_id":369,"service_id":3},{"partner_id":369,"service_id":1},{"partner_id":370,"service_id":2},{"partner_id":370,"service_id":3},{"partner_id":370,"service_id":1},{"partner_id":370,"service_id":5},{"partner_id":371,"service_id":2},{"partner_id":371,"service_id":1},{"partner_id":372,"service_id":3},{"partner_id":372,"service_id":1},{"partner_id":372,"service_id":7},{"partner_id":373,"service_id":1},{"partner_id":373,"service_id":5},{"partner_id":373,"service_id":2},{"partner_id":373,"service_id":3},{"partner_id":374,"service_id":3},{"partner_id":374,"service_id":1},{"partner_id":375,"service_id":1},{"partner_id":376,"service_id":5},{"partner_id":376,"service_id":1},{"partner_id":376,"service_id":3},{"partner_id":377,"service_id":1},{"partner_id":378,"service_id":1},{"partner_id":378,"service_id":3},{"partner_id":378,"service_id":5},{"partner_id":379,"service_id":3},{"partner_id":379,"service_id":1},{"partner_id":380,"service_id":3},{"partner_id":380,"service_id":7},{"partner_id":380,"service_id":1},{"partner_id":380,"service_id":5},{"partner_id":381,"service_id":3},{"partner_id":381,"service_id":1},{"partner_id":382,"service_id":5},{"partner_id":382,"service_id":3},{"partner_id":382,"service_id":4},{"partner_id":382,"service_id":2},{"partner_id":382,"service_id":1},{"partner_id":383,"service_id":1},{"partner_id":383,"service_id":3},{"partner_id":384,"service_id":1},{"partner_id":384,"service_id":3},{"partner_id":385,"service_id":3},{"partner_id":385,"service_id":1},{"partner_id":386,"service_id":1},{"partner_id":386,"service_id":3},{"partner_id":387,"service_id":3},{"partner_id":387,"service_id":7},{"partner_id":387,"service_id":1},{"partner_id":387,"service_id":4},{"partner_id":388,"service_id":3},{"partner_id":388,"service_id":1},{"partner_id":389,"service_id":3},{"partner_id":389,"service_id":1},{"partner_id":390,"service_id":3},{"partner_id":390,"service_id":1},{"partner_id":391,"service_id":3},{"partner_id":391,"service_id":1},{"partner_id":391,"service_id":5},{"partner_id":392,"service_id":3},{"partner_id":392,"service_id":2},{"partner_id":392,"service_id":1},{"partner_id":392,"service_id":5},{"partner_id":393,"service_id":1},{"partner_id":393,"service_id":3},{"partner_id":394,"service_id":1},{"partner_id":395,"service_id":1},{"partner_id":395,"service_id":4},{"partner_id":395,"service_id":5},{"partner_id":395,"service_id":3},{"partner_id":396,"service_id":1},{"partner_id":396,"service_id":3},{"partner_id":396,"service_id":5},{"partner_id":397,"service_id":3},{"partner_id":397,"service_id":1},{"partner_id":398,"service_id":1},{"partner_id":399,"service_id":1},{"partner_id":400,"service_id":7},{"partner_id":400,"service_id":1},{"partner_id":400,"service_id":3},{"partner_id":401,"service_id":3},{"partner_id":401,"service_id":1},{"partner_id":401,"service_id":5},{"partner_id":402,"service_id":3},{"partner_id":402,"service_id":4},{"partner_id":402,"service_id":5},{"partner_id":402,"service_id":1},{"partner_id":403,"service_id":1},{"partner_id":405,"service_id":3},{"partner_id":405,"service_id":1},{"partner_id":405,"service_id":5},{"partner_id":406,"service_id":1},{"partner_id":407,"service_id":1},{"partner_id":407,"service_id":3},{"partner_id":408,"service_id":1},{"partner_id":408,"service_id":3},{"partner_id":409,"service_id":1},{"partner_id":410,"service_id":1},{"partner_id":411,"service_id":1},{"partner_id":412,"service_id":1},{"partner_id":413,"service_id":3},{"partner_id":413,"service_id":1},{"partner_id":414,"service_id":2},{"partner_id":414,"service_id":4},{"partner_id":414,"service_id":1},{"partner_id":415,"service_id":3},{"partner_id":415,"service_id":1},{"partner_id":416,"service_id":1},{"partner_id":416,"service_id":4},{"partner_id":416,"service_id":5},{"partner_id":417,"service_id":3},{"partner_id":417,"service_id":1},{"partner_id":418,"service_id":3},{"partner_id":418,"service_id":1},{"partner_id":419,"service_id":1},{"partner_id":419,"service_id":3},{"partner_id":420,"service_id":1},{"partner_id":421,"service_id":1},{"partner_id":421,"service_id":3},{"partner_id":421,"service_id":4},{"partner_id":422,"service_id":1},{"partner_id":422,"service_id":3},{"partner_id":423,"service_id":1},{"partner_id":423,"service_id":5},{"partner_id":424,"service_id":1},{"partner_id":424,"service_id":3},{"partner_id":425,"service_id":4},{"partner_id":425,"service_id":1},{"partner_id":425,"service_id":3},{"partner_id":425,"service_id":6},{"partner_id":426,"service_id":1},{"partner_id":426,"service_id":3},{"partner_id":426,"service_id":6},{"partner_id":427,"service_id":6},{"partner_id":427,"service_id":3},{"partner_id":427,"service_id":1},{"partner_id":427,"service_id":5},{"partner_id":428,"service_id":3},{"partner_id":428,"service_id":1},{"partner_id":428,"service_id":6},{"partner_id":429,"service_id":1},{"partner_id":429,"service_id":3},{"partner_id":429,"service_id":6},{"partner_id":430,"service_id":5},{"partner_id":430,"service_id":3},{"partner_id":430,"service_id":4},{"partner_id":430,"service_id":6},{"partner_id":430,"service_id":1},{"partner_id":431,"service_id":3},{"partner_id":431,"service_id":6},{"partner_id":431,"service_id":1},{"partner_id":432,"service_id":6},{"partner_id":432,"service_id":3},{"partner_id":432,"service_id":1},{"partner_id":433,"service_id":3},{"partner_id":433,"service_id":5},{"partner_id":433,"service_id":1},{"partner_id":433,"service_id":6},{"partner_id":434,"service_id":5},{"partner_id":434,"service_id":3},{"partner_id":434,"service_id":6},{"partner_id":434,"service_id":1},{"partner_id":435,"service_id":1},{"partner_id":435,"service_id":3},{"partner_id":435,"service_id":6},{"partner_id":436,"service_id":1},{"partner_id":436,"service_id":3},{"partner_id":436,"service_id":5},{"partner_id":436,"service_id":6},{"partner_id":437,"service_id":3},{"partner_id":437,"service_id":6},{"partner_id":437,"service_id":5},{"partner_id":437,"service_id":1},{"partner_id":438,"service_id":1},{"partner_id":438,"service_id":3},{"partner_id":438,"service_id":6},{"partner_id":439,"service_id":1},{"partner_id":439,"service_id":6},{"partner_id":439,"service_id":5},{"partner_id":439,"service_id":3},{"partner_id":439,"service_id":2},{"partner_id":440,"service_id":6},{"partner_id":440,"service_id":3},{"partner_id":440,"service_id":1},{"partner_id":441,"service_id":4},{"partner_id":441,"service_id":5},{"partner_id":441,"service_id":1},{"partner_id":441,"service_id":6},{"partner_id":441,"service_id":2},{"partner_id":442,"service_id":1},{"partner_id":442,"service_id":6},{"partner_id":443,"service_id":1},{"partner_id":443,"service_id":6},{"partner_id":444,"service_id":1},{"partner_id":445,"service_id":5},{"partner_id":445,"service_id":1},{"partner_id":446,"service_id":1},{"partner_id":446,"service_id":3}
      ]);
    });
};
