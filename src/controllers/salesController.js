const salesService = require('../services/salesServices');

const addSale = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesService.addSale(sales);
  if (type) return res.status(type).json(message);
  res.status(201).json(message);
};

module.exports = {
  addSale,
};
