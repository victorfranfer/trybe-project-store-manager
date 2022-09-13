const express = require('express');
const salesController = require('../controllers/salesController');
const salesMiddleware = require('../middlewares/salesMiddleware');

const sales = express.Router();

sales.post('/', salesMiddleware.validateSale, salesController.addSale);

module.exports = sales;
