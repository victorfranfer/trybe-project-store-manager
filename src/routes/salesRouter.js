const express = require('express');
const salesController = require('../controllers/salesController');
const salesMiddleware = require('../middlewares/salesMiddleware');

const sales = express.Router();

sales.post('/', salesMiddleware.validateSale, salesController.addSale);
sales.get('/', salesController.getAllSales);
sales.get('/:id', salesController.getSaleById);

module.exports = sales;
