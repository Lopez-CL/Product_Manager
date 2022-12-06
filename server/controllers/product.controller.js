const Product = require('../models/product.model');

//create a Product
module.exports.createProduct = (req, res) => {
    const {body} = req;
    Product.create(body)
        .then((newProduct) => res.json(newProduct))
        .catch(err => console.log(err));
};
//get all Products
module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json(allProducts))
        .catch(err => console.log(err));
};
//get product by ID
module.exports.getProductById = (req, res) => {
    const {params} = req;
    Product.findOne({_id: params._id})
        .then((product) => res.json(product))
        .catch(err => console.log(err));
};
//update specific product
module.exports.updateProduct = (req, res) => {
    const {body,params} = req;
    Product.findOneAndUpdate({_id: params._id}, body,{
        new: true,
        runValidators: true,
    })
        .then((updatedProduct) => res.json(updatedProduct))
        .catch(err => console.log(err));
};
//get product by ID
module.exports.deleteProduct = (req, res) => {
    const {params} = req;
    Product.deleteOne({_id: params._id})
        .then((result) => res.json(result))
        .catch(err => console.log(err));
};