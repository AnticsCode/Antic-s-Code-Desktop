import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow = null;
const args = process.argv.slice(1),
      serve = args.some(val => val === '--serve');

function createWindow(): BrowserWindow {

  const electronScreen: Electron.Screen = screen;
  const size: Electron.Size = electronScreen.getPrimaryDisplay().workAreaSize;

  let width = 1440;
  let height = 920;

  if (size.width < 1280 || size.height < 720) {
    width = size.width;
    height = (size.height - 40);  // dock
  }

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width,
    height,
    maxWidth: width,
    maxHeight: height,
    minWidth: width,
    minHeight: height,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: (serve) ? true : false,
    },
    icon: path.join(__dirname, 'src/favicon.ico')
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  win.on('closed', () => win = null);
  return win;
}

try {
  app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
