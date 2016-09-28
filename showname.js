var sql = require('sql.js');
var fs = require('fs');

var filebuffer = fs.readFileSync('./data.sqlite');
var db = new sql.Database(filebuffer);
function showname() {
  var x = $('#lfn').val();
  console.log(x);
  var stmt = db.prepare("SELECT * FROM index_table WHERE id =:x");
  var result = stmt.getAsObject({':x' : x});
  console.log(result);
  $('#cust_name').replaceWith("<span id = 'cust_name' style='color:white;'>Ledger of " + result['date'] + "</span>");
}
