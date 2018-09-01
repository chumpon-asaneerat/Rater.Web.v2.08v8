function init(app) {
    let bodyParser = require('body-parser');
    // body parser.
    app.use(bodyParser.json());
    // extended must be false??.
    app.use(bodyParser.urlencoded({ extended: true }));
};

exports.init = module.exports.init = init;