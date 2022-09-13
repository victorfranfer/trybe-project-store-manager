const productModel = require('../models/productModel');

const getAll = async () => {
  const result = await productModel.getAll();
  return { type: null, message: result };
};

const getProductById = async (id) => {
  const result = await productModel.getProductById(id);
  if (!result) return { type: 404, message: 'Product not found' };

  return { type: null, message: result };
};

module.exports = {
  getAll,
  getProductById,
};
