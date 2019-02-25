const {app, BrowserWindow} = require('electron');

let mainWindow = null;

//create the window, don't show it til the html file is loaded
app.on('ready', () => {
    mainWindow = new BrowserWindow({show: false});

    mainWindow.loadFile(`${__dirname}/index.html`);

    mainWindow.on('ready-to-show', () =>{
        mainWindow.show();
    });
});

