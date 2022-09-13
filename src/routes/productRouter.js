const express = require('express');
const productController = require('../controllers/productController');
const productMiddleware = require('../middlewares/productMiddleware');

const product = express.Router();

product.get('/', productController.getAll);
product.get('/:id', productController.getProductById);
product.post('/', productMiddleware.validateName, productController.addProduct);

module.exports = product;
