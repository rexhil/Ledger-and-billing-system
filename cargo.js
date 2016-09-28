var sql = require('sql.js');
var fs = require('fs');

var submit = document.getElementById('submit');
var part = [];
var pics = [];
var rate = [];
var weight = [];

submit.addEventListener('click', ()=>{
  $('input.rate').each(function(){
    rate.push($(this).val());
  });
  $('input.part').each(function(){
    part.push($(this).val());
  });
  $('input.pics').each(function(){
    pics.push($(this).val());
  });
  $('input.weight').each(function(){
    weight.push($(this).val());
  });
  var filebuffer = fs.readFileSync('./data.sqlite')
  var db = new sql.Database(filebuffer);
  var rname = document.getElementById('name').value;
  var sname = document.getElementById('sector').value;
  var tktno = document.getElementById('tktno').value;
  var fare = document.getElementById('fare').value;
  var fol = document.getElementById('folio').value;
  var cpd = document.getElementById('cpd').value;
    db.run(`INSERT INTO cargo (rname, sname, oc, total, folio)
    VALUES(?, ?, ?, ?, ?)`, [rname, sname, oc, total, folio]);
    // db.run(`INSERT INTO daybook (t_type, partiular, amount, folio)
    // VALUES(0, "someone", 2000, 24);`)

    var res = db.exec("SELECT * FROM cargo;");
    console.log(res);

    // var stmt = db.prepare("SELECT * FROM daybook ");
    // var result = stmt.getAsObject({':some' : 0});
    // console.log(result);

    // stmt.bind(['', 0, 'meeee', 5000, 45]);
    // while(stmt.step()) console.log(stmt.get());
    //
    // stmt.free();
    var ba = db.export();
    db.close();
    var buffer = new Buffer(ba);
    fs.writeFileSync('./data.sqlite', buffer);
});
