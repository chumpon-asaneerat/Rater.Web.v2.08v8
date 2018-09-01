const rootPath = process.env['ROOT_PATHS'];

const path = require('path');
const fs = require('fs');
const cfgPath = path.join(rootPath, 'configs');

let instanceCounter = 0;

class AppConfig {
    constructor() {
        this._instanceId = ++instanceCounter;
        // internal variables
        this._configFileName = 'app-config.json';
        this._config = null;

        // log for check create new instance call.
        console.log('create new AppConfig - id: ' + this._instanceId);

        // load config.
        this.__loadConfigFile();
    };

    __loadConfigFile() {
        let self = this;
        let targetFile = path.join(cfgPath, this._configFileName);
        try {
            let obj = fs.readFileSync(targetFile, 'utf8');
            if (!obj) {
                self._config = null;
            }
            else {
                self._config = JSON.parse(obj);
            }
        }
        catch (err) {
            self._config = null;
            console.error('load config error: ', err);
        }
    };

    // The internal object instance id.
    get instanceId() { return this._instanceId; };
    // app's config instance.
    get config() { return this._config; };
    // app's config information.
    get app() {
        if (this._config) {
            return this._config.app;
        }
        else {
            return null;
        }
    };
    // app server's config information.
    get server() {
        if (this._config) {
            return this._config.server;
        }
        else {
            return null;
        }
    };
    // db server's config information.
    get db() {
        if (this._config) {
            return this._config.db;
        }
        else {
            return null;
        }
    };
    // requires to move to mssqldb.js
    /*
    getDatabaseConfig() {
        return {
            user: this.userName,
            password: this.passWord,
            server: this.serverName,
            database: this.dbName,
            pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        }
    };
    */
};

let globalConfig = new AppConfig();

exports.config = module.exports.config = globalConfig;
