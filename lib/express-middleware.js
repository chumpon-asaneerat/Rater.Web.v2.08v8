const rootPath = process.env['ROOT_PATHS'];

const path = require('path');
const fs = require('fs');

function load(app, name) { 
    if (!app) return; // skip if no express app instance.
    if (!name || name.trim() === '') return; // skip empty module name.
    let mwFileName = path.join(rootPath, 'lib', 'middlewares', name + '.js');
    try {
        let mod = require(mwFileName);
        mod.init(app);
        console.log('    ' + name + ' load success.');
    }
    catch (err) {
        console.error('  * ' + name + ' load failed: ', err);
    }
};

exports.load = module.exports.load = load;