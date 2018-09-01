function init(app) {
    let logger = require('morgan');
    app.use(logger('dev'));
};

exports.init = module.exports.init = init;