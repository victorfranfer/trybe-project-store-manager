const productService = require('../services/productServices');

const getAll = async (req, res) => {
  const { type, message } = await productService.getAll();
  if (type) return res.status(500).json({ message });
  res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductById(id);
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const addProduct = async (req, res) => {
  const newProduct = req.body;
  const { type, message } = await productService.addProduct(newProduct.name);
  if (type) return res.status(type).json(message);
  res.status(201).json(message);
};

const updateProductById = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productService.updateProductById(name, id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

module.exports = {
  getAll,
  getProductById,
  addProduct,
  updateProductById,
};
