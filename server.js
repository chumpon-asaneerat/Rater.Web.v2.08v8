// base modules require.
const path = require('path');

// setup root path.
process.env['ROOT_PATHS'] = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];
// server modules require.
//const appcfg = require(path.join(rootPath, 'lib', 'app-config'));
const expSvr = require(path.join(rootPath, 'lib', 'express-server'));

//console.log(appcfg);
const server = new expSvr.ExpressServer();

// start server.
server.start();

