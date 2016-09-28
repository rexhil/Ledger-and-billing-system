const {app, BrowserWindow} = require('electron');
const ipc = require('electron').ipcMain;
app.on('ready', () => {
  let loginwin =new BrowserWindow({
    width:600,
    height:460,
    resizable: false,
    })
  loginwin.on('close', function (){loginwin = null})
  loginwin.loadURL(`file://${__dirname}/login.html`);

  // let daybook =new BrowserWindow({
  //   width:1080,
  //   height:460,
  //   resizable: false,
  //   show: false
  // })
  //  daybook.loadURL(`file://${__dirname}/daybook.html`);
  //
  // let ticket =new BrowserWindow({
  //   width:600,
  //   height:460,
  //   resizable: false,
  //   show: false
  // })
  //  ticket.loadURL(`file://${__dirname}/ticket.html`);
  //
  // let cargo =new BrowserWindow({
  //   width:1080,
  //   height:700,
  //   resizable: false,
  //   show: false
  // })
  //  cargo.loadURL(`file://${__dirname}/cargo.html`);
  //
  //  ipc.on('open_day_book', ()=>{
  //    daybook.show()
  //  });
  //  ipc.on('open_ticket', ()=>{
  //    ticket.show()
  //  });
  //  ipc.on('open_cargo', ()=>{
  //    cargo.show()
  //  });
  //  ipc.on('open_report', ()=>{
  //    report.show();
  //  });
   ipc.on('removefocus', ()=>{
     loginwin.setFocusable(false);
   })
})
