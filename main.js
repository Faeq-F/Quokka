
const { Menu, Tray,app, BrowserWindow, globalShortcut, ipcMain } = require('electron')
const child_process = require('child_process');
const exec = require('child_process').exec;
function execute(command, callback) {
    exec(command, (error, stdout, stderr) => { 
        callback(stdout); 
    });
};

app.disableHardwareAcceleration()
const fs = require('fs') //use electron-store module
const path = require('path');
app.commandLine.appendSwitch('--allow-file-access-from-files');




//function to create the settings window
function createSettingsWindow() {
  // creating window
  const settingsWindow = new BrowserWindow({
    // removing frame for custom title bar
    frame: false,
    // allowing node integration
    webPreferences: {
      enableRemoteModule: true,
      defaultFontFamily: 'phenomena',
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    //making window transparent to create custom bg
    transparent: true,
    //can't resize due to custom bg
    resizable: false,
    enableRemoteModule: true,
    movable: true,
    //window is always on top so it cannot be minimized and lost
    alwaysOnTop: true,
    autoHideMenuBar: true,
    skipTaskbar: true,
    // sets window icon
    icon: 'icon.ico' ,
  })
  // loading html file for UI
  settingsWindow.loadFile('settings.html')
  settingsWindow.setVisibleOnAllWorkspaces(true, {visibleOnFullScreen: true});
  //window to AOT
  settingsWindow.setAlwaysOnTop(true, "floating", 1);
  settingsWindow.setFullScreenable(false);
  settingsWindow.removeMenu();
  settingsWindow.maximize()
};



function createWindow () {
  const win = new BrowserWindow({
    
    frame: false,
        webPreferences: {
            nodeIntegration: true
        },
        transparent: true,
        resizable: false,
        movable: false,
        webPreferences: {
    nodeIntegration: true,},
        alwaysOnTop: true,
        autoHideMenuBar: true,
        
        icon: 'icon.ico' ,// sets window icon
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
 
  win.loadFile('main.html')
  win.setFullScreen(true);
  win.setSkipTaskbar(true);
win.setVisibleOnAllWorkspaces(true, {visibleOnFullScreen: true});
win.setAlwaysOnTop(true, "floating", 1);
win.setFullScreenable(false);
win.removeMenu();
win.maximize() 

}



let tray = null
app.whenReady().then(() => {
  globalShortcut.register('Alt+Space', () => {
    createWindow()
  })
  tray = new Tray('F:/Faeq\'s other data/Life/Programming/Quokka/icon.ico')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show window (Esc to close)', type: 'normal',
        click: () => {
          createWindow()
        }
    },
    { label: 'Refresh indexes', type: 'normal' },
    { label: 'Settings', type: 'normal',
        click: () => {
          createSettingsWindow()
        }
    },
    { label: 'Exit', type: 'normal',
        click: () => app.quit()
    }
  ])
  tray.setToolTip('Quokka (Alt + Space to launch)')
  tray.setContextMenu(contextMenu)
})
