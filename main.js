/*
* app: controla o ciclo de vida do evento do seu aplicativo
* BrowserWindow: cria e gerencia janelas de aplicativos.
*/
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })
  