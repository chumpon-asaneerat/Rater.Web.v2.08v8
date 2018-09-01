const rootPath = process.env['ROOT_PATHS'];

const path = require('path');
const appcfg = require(path.join(rootPath, 'lib', 'app-config'));
const expMw = require(path.join(rootPath, 'lib', 'express-middleware'));

// modules require.
const express = require('express');

class ExpressServer {
    constructor() {
        // internal variables        
        this._app = express(); // create express middle ware instance.
        this._cfg = appcfg.config;
        // init express app by config file.
        this.__initExpressApp();
    };

    __initExpressApp() {
        // init express configuration from json file.
        if (this._cfg) {
            console.log('load express config...');
            // setup app name
            let appCfg = (this._cfg.app) ? this._cfg.app : null;
            let appName = appCfg.name + ' ' + appCfg.version;
            this._app.set('app-name', appName.trim());
            // setup port.
            let svrCfg = (this._cfg.server) ? this._cfg.server : null;
            let portNumber = (svrCfg) ? svrCfg.portNumber : null;
            this._app.set('port', process.env.PORT || portNumber || 3000);
        }
    };

    setupMiddlewares(modules) {
        if (!modules || !(modules instanceof Array)) {
            console.log('The modules cannot be null and must be array of string.');
        }
        let self = this;
        console.log('Load express`s middlewares.');
        modules.forEach(name => {
            expMw.load(self.app, name);
        });
    };

    start() {
        if (this._cfg && this._cfg.app && this._cfg.server && this._cfg.db) {
            let appName = this._app.get('app-name');
            let portNumber = this._app.get('port');
            let server = this._app.listen(portNumber, function () {
                let portName = server.address().port; // recheck port name.
                console.log(appName + ' listening on port ' + portName);
            });
        }
        else {
            console.error('config instance is null.');
        }
    };

    // express app instance.
    get app() { return this._app; };
}

exports.ExpressServer = module.exports.ExpressServer = ExpressServer;