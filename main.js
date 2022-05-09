const { app, BrowserWindow, systemPreferences, Menu } = require('electron')
require('electron-reload')(__dirname)

function createWindow() {
    window = new BrowserWindow({width: 800, height: 600})

    window.loadFile('index.html')
    window.webContents.openDevTools()

    let menu = Menu.buildFromTemplate([
        {
            label:"File",
            submenu:[
                {label:'Get Article'},
                {label:'Exit',
                    click() {
                        app.quit()
                    }
                }
            ]
        },

        {label:"About"}
    ])

    Menu.setApplicationMenu(menu)
  }

  app.whenReady().then(() => {
      createWindow()
  })