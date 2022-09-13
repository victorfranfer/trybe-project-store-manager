const express = require('express');
const productController = require('../controllers/productController');

const product = express.Router();

product.get('/', productController.getAll);
product.get('/:id', productController.getProductById);
product.post('/', productController.addProduct);

module.exports = product;
