var BrowserWindow = require('electron').remote.BrowserWindow
const ipc = require('electron').ipcRenderer;
var login = document.getElementById("login-btn");
var login_guest = document.getElementById("login-guest");
// function newwin() {
//
// // daybook.addEventListener('click', ()=>{
//   console.log("hello");
//   ipc.send('open_day_book');
// // })
// }
var daybook = document.getElementById("daybook");
var create = document.getElementById("create");
var ticket = document.getElementById("ticket");
var cargo = document.getElementById("cargo");
var report= document.getElementById("report");
document.getElementById("password").addEventListener("keyup",(event)=> {
    event.preventDefault();
    if (event.keyCode == 13) {
        login.click();
    }
});
ticket.addEventListener('click',()=>{
  let ticketwin =new BrowserWindow({
    width:420,
    x:0,
    y:200,
    height:510,
    resizable: false
  })
  ticketwin.on('close', function () { ticket = null })
  ticketwin.loadURL(`file://${__dirname}/ticket.html`);
  ticketwin.show();
})
daybook.addEventListener('click',()=>{
  let dbwin =new BrowserWindow({
    width:320,
    height:480,
    x:200,
    y:3,
    resizable: false
  })
  dbwin.on('close', function () { dbwin = null })
  dbwin.loadURL(`file://${__dirname}/daybook.html`);
  dbwin.show();
})
cargo.addEventListener('click',()=>{
  let cargowin =new BrowserWindow({
    width:1080,
    height:700,
    x:0,
    y:0,
    resizable: false
  })
  cargowin.on('close', function () { cargowin = null })
  cargowin.loadURL(`file://${__dirname}/cargo.html`);
  cargowin.show();
  ipc.send('removefocus')
})
report.addEventListener('click',()=>{
  let reportwin =new BrowserWindow({
    width:480,
    x:500,
    y:500,
    height:600,
    resizable: false
  })
  reportwin.on('close', function () { reportwin = null })
  reportwin.loadURL(`file://${__dirname}/report.html`);
  reportwin.show();
})
create.addEventListener('click',()=>{
  let createwin = new BrowserWindow({
    width:320,
    x:500,
    y:500,
    height:400,
    resizable: false
  })
  createwin.on('close', function(){ createwin = null })
  createwin.loadURL(`file://${__dirname}/create.html`)
  createwin.show();
})
// login.addEventListener('click', ()=>{
// var pwd = document.getElementById("password");
// if (pwd.value == 'sagarnpj'){
// var  admin = 1;
//   document.write(pwd.value);
// }
// else {
//   alert("Sorry! Wrong Password")
// }
// }, false);

// login_guest.addEventListener('click', ()=>{
//   ipc.send('loadmain')
// })
// close.addEventListener('click',()=>{
//     ipc.send('close');
// })
