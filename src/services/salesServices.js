const salesModel = require('../models/salesModel');

const addSale = async (sales) => {
  const saleId = await salesModel.addSaleDate();
  await Promise.all(sales.map((sale) => salesModel.addSale({ saleId, ...sale })));

  return { type: null, message: { id: saleId, itemsSold: sales } };
};

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  return { type: null, message: result };
};

const getSaleById = async (id) => {
  const result = await salesModel.getSaleById(id);
  if (!result.length) return { type: 404, message: 'Sale not found' };

  return { type: null, message: result };
};

module.exports = {
  addSale,
  getAllSales,
  getSaleById,
};
