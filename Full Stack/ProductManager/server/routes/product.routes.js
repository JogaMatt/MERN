const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/product', ProductController.allProducts);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.post('/api/product', ProductController.createProduct);

}