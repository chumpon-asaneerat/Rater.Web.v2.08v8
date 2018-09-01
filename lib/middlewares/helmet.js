function init(app) {
    let helmet = require('helmet');
    app.use(helmet());
};

exports.init = module.exports.init = init;