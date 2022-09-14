const salesService = require('../services/salesServices');

const addSale = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesService.addSale(sales);
  if (type) return res.status(type).json(message);
  res.status(201).json(message);
};

const getAllSales = async (req, res) => {
  const { type, message } = await salesService.getAllSales();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleById(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

module.exports = {
  addSale,
  getAllSales,
  getSaleById,
};
