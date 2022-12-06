const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.post('/api/createProduct', ProductController.createProduct);
    app.get('/api/displayProducts', ProductController.getAllProducts);
    app.get('/api/getProduct/:_id', ProductController.getProductById);
    app.put('/api/updateProduct/:_id', ProductController.updateProduct);
    app.delete('/api/deleteProduct/:_id', ProductController.deleteProduct);
};