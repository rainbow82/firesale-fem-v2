const fs = require('fs');

const {app, BrowserWindow, dialog} = require('electron');

let mainWindow = null;

//create the window, don't show it til the html file is loaded
app.on('ready', () => {
    mainWindow = new BrowserWindow({show: false});

    mainWindow.loadFile(`${__dirname}/index.html`);

    mainWindow.on('ready-to-show', () =>{
        mainWindow.show();
    });
});

exports.getFileFromUser = () => {
    const files = dialog.showOpenDialog({
        properties: ['openFile'],
        buttonLabel: 'Get File',
        //title: 'Open Files',   only shows on Windwows, Linux
        filters: [
            {name: 'Markdown', extensions: ['md', 'mdown', 'markdown']},
            {name: 'Text Files', extensions: ['txt', 'text']},
            {name: 'CSV Files', extensions: ['csv']}

        ]
    });

    const file = files[0];
    const content = fs.readFileSync(file).toString();

    if(!files) return;
    console.log(content);
};
