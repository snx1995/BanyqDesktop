import { app, BrowserWindow, ipcMain } from 'electron';

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

function createWindow() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        width: 600,
        minWidth: 600,
        height: 400,
        minHeight: 400,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false,
        x: 20,
        y: 200
    })

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    mainWindow.on('unmaximize', e => {
        console.log('unmax', mainWindow.getSize());
        
    })

    mainWindow.on('maximize', e => {
        console.log('max', mainWindow.getSize());
    })
}

ipcMain.on('cmd', (e, ...args) => {
    const currWindow = BrowserWindow.getFocusedWindow();
    const currWebcontents = e.sender;
    switch (args[0]) {
        case 'devTools':
            if (currWebcontents.isDevToolsOpened()) {
                currWebcontents.closeDevTools();
            } else {
                currWebcontents.openDevTools();
            }
            break;
        case 'maximize':
            currWindow.maximize();
            break;
        case 'unmaximize':
            currWindow.unmaximize();
            break;
        case 'minimize':
            currWindow.minimize();
            break;
        case 'top':
            currWindow.setAlwaysOnTop(!currWindow.isAlwaysOnTop());
            break;
        default:
            console.warn(`invalid cmd received: ${args[0]}`);
    }
})

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
