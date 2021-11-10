'use strict';
module.exports = function(app) {
    var productsCtrl = require('./controllers/ProductsController');

    // todoList Routes
    app.route('/products')
        .get(productsCtrl.get)

};
