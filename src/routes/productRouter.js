const express = require('express');
const productController = require('../controllers/productController');

const product = express.Router();

product.get('/', productController.getAll);
product.get('/:id', productController.getProductById);

module.exports = product;
