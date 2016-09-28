var sql = require('sql.js');
var fs = require('fs');

$('document').ready(function(){
  console.log('Document is ready');
  var filebuffer = fs.readFileSync('./data.sqlite');
  var db = new sql.Database(filebuffer);
    db.run(`
      create table if not exists daybook (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ,
      date DATE DEFAULT (datetime('now','localtime')),
      t_type BOOLEAN NOT NULL,
      particular TEXT NOT NULL,
      amount FLOAT NOT NULL,
      folio INTEGER);
      `);
    db.run(`
      create table if not exists cargo (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ,
      date DATE DEFAULT (datetime('now','localtime')),
      rname Text NOT NULL,
      sname TEXT NOT NULL,
      oc FLOAT,
      total TEXT NOT NULL,
      folio INTEGER);
      `);
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
      folio INTEGER
    );
      `);
    db.run(`
      create table if not exists index_table(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name TEXT NOT NULL,
        mobile TEXT NOT NULL,
        office TEXT
      );
      `);
    db.run(`
      create table if not exists bill_data(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        billno INTEGER NOT NULL,
        particular TEXT NOT NULL,
        pics INTEGER NOT NULL,
        rate FLOAT NOT NULL,
        weight INTEGER NOT NULL
      );
      `);
    var ba = db.export();
    db.close();
    var buffer = new Buffer(ba);
    fs.writeFileSync('./data.sqlite', buffer);
});
