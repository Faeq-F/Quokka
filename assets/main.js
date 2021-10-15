
const { Menu, Tray,app, BrowserWindow, globalShortcut} = require('electron')
const child_process = require('child_process');
const exec = require('child_process').exec;
const fs = require('fs');
const { dialog } = require('electron').dialog;
let basepath = app.getAppPath()
app.disableHardwareAcceleration()
const path = require('path');
const url = require('url')
app.commandLine.appendSwitch('--allow-file-access-from-files');

delete require('electron').nativeImage.createThumbnailFromPath
function readFile(fileURL,mimeType){
  //readFile does not accept the file:\\\ thing, so we remove it
  const pathToFile = fileURL.replace("file:\\\\",'');

  fs.readFile(pathToFile,mimeType,(err,contents)=>{
    if(err){
        console.log(err);
        return;
    }
    return contents;
  })
}




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
    icon: basepath +'/Icons/Quokka.ico' ,
  })
  // loading html file for UI
  settingsWindow.loadFile(basepath+"/html files/settings.html")
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
        alwaysOnTop: true,
        autoHideMenuBar: true,

    icon: basepath+'/Icons/Quokka.ico' ,// sets window icon
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadURL(url.format ({
      pathname: path.join(basepath,'/html files/main.html'),
      protocol: 'file:',
      slashes: true
   }))
  //win.loadFile(basepath+'/html files/main.html')
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
  globalShortcut.register('Escape', () => {
    try {
      var window = BrowserWindow.getFocusedWindow();
      window.hide();
    } catch (error) {
      console.log(error)
    }

  })
  tray = new Tray(basepath+'/Icons/Quokka.ico')

  const Globals = readFile(basepath +'/../Global Settings.txt','utf8')
  const Signifiers = readFile(basepath +'/JSON data/Command signifiers.json','utf8')
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
