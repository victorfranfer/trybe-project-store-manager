const salesModel = require('../models/salesModel');

const addSale = async (sales) => {
  const saleId = await salesModel.addSaleDate();
  await Promise.all(sales.map((sale) => salesModel.addSale({ saleId, ...sale })));

  return { type: null, message: { id: saleId, itemsSold: sales } };
};

module.exports = {
  addSale,
};
