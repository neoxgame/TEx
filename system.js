// Modules to control application life and create native browser window
const electron = require('electron')
const path = require('path')
const url = require('url');
const { app, BrowserWindow } = electron
let win

app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      sandbox: true
    }
  })
  win.loadURL('https://google.com')
})
