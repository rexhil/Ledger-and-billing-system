var sql = require('sql.js');
var fs = require('fs');

var submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
  var filebuffer = fs.readFileSync('./data.sqlite')
  var db = new sql.Database(filebuffer);
  var tt_ele = document.getElementById('t_type');
  var tt = tt_ele.options[tt_ele.selectedIndex].value;
  var amt = document.getElementById('amt').value;
  var fol = document.getElementById('folio').value;
  var part = document.getElementById('part').value;

  db.run(`INSERT INTO daybook (t_type, particular, amount, folio)
  VALUES(?, ?, ?, ?)`, [tt, part, amt, fol]);
  var ba = db.export();
  db.close();
  var buffer = new Buffer(ba);
  fs.writeFileSync('./data.sqlite', buffer);
})

$('document').ready(function() {
  $('input').keyup(function(){
    sh_submit_input_select();
  })
  $('select').change(function(){
    sh_submit_input_select();
  })
  })
