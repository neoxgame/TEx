// Modules to control application life and create native browser window
const { ipcMain, app, dialog, remote, BrowserWindow, session } = require('electron')
const path = require('path')
const url = require('url');

let win

app.enableSandbox()
app.whenReady().then(() => {
  // any sandbox:false calls are overridden since `app.enableSandbox()` was called.
  const win = new BrowserWindow()
  win.loadURL('https://google.com')
})
