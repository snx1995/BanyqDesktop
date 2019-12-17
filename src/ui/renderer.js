// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { ipcRenderer } = require('electron');


document.getElementById('windowCtrlGroup').addEventListener('click', e => {
    const target = e.target;
    if (target.matches('.window-ctrl')) {
        const ctrl = target.dataset.ctrl;
        switch (ctrl) {
            case 'reload':
                location.reload();
                break;
            case 'close':
                if (confirm('close ?')) window.close();
                break;
            default:
                ipcRenderer.send('cmd', ctrl);
        }
    }
})