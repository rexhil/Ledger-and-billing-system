var sql = require('sql.js');
var fs = require('fs');

var submit = document.getElementById('submit');

submit.addEventListener('click', ()=>{
  var filebuffer = fs.readFileSync('./data.sqlite')
  var db = new sql.Database(filebuffer);
  var tt_ele = document.getElementById('air');
  var air = tt_ele.options[tt_ele.selectedIndex].value;
  var name = document.getElementById('name').value;
  var sector = document.getElementById('sector').value;
  var tktno = document.getElementById('tktno').value;
  var fare = document.getElementById('fare').value;
  var fol = document.getElementById('folio').value;
  var cpd = document.getElementById('cpd').value;
    db.run(`
      create table if not exists issue_tkt (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ,
      date DATE DEFAULT (datetime('now','localtime')),
      air Text NOT NULL,
      name TEXT NOT NULL,
      tktno INTEGER NOT NULL,
      sector TEXT NOT NULL,
      fare FLOAT NOT NULL,
      cpd TEXT,
      folio INTEGER);
      `)
    db.run(`INSERT INTO issue_tkt (air, name, tktno, sector, fare, cpd, folio)
    VALUES(?, ?, ?, ?, ?, ?, ?)`, [air, name, tktno, sector, fare, cpd, fol]);

    var res = db.exec("SELECT * FROM issue_tkt;");
    // console.log(res);

    var stmt = db.prepare("SELECT * FROM issue_tkt ");
    // var result = stmt.getAsObject({':some' : 0});
    // console.log(result);

    // stmt.bind(['', 0, 'meeee', 5000, 45]);
    while(stmt.step()) console.log(stmt.get());

    stmt.free();
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
