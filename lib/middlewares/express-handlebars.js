const rootPath = process.env['ROOT_PATHS'];

const path = require('path');
const viewPath = path.join(rootPath, 'views');

function init(app) {
    let exphbs = require('express-handlebars');
    let hbs = exphbs.create();
    // view engine setup
    app.set('views', viewPath);
    app.engine('handlebars', hbs.engine)
    app.set('view engine', 'handlebars');
};

exports.init = module.exports.init = init;