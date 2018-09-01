function init(app) {
    let cookieParser = require('cookie-parser');
    // cookie parser.
    app.use(cookieParser());
};

exports.init = module.exports.init = init;