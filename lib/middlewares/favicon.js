const path = require('path');

const rootPath = process.env['ROOT_PATHS'];
const publicPath = path.join(rootPath, 'public');

function init(app) {
    let favicon = require('serve-favicon');
    // if change favicon.ico required to restart server.
    app.use(favicon(path.join(publicPath, 'favicon.ico')));
    //app.use(favicon(path.join(publicPath, 'favicon.ico'), { maxAge: '15s' }));
};

exports.init = module.exports.init = init;