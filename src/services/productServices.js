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

const addProduct = async (newProduct) => {
  const result = await productModel.addProduct(newProduct);
  return { type: null, message: { id: result.insertId, name: newProduct } };
};

const updateProductById = async (name, id) => {
  const result = await getProductById(id);
  if (result.type) return result;
  await productModel.updateProductById(name, id);
  return { type: null, message: { id, name } };
};

module.exports = {
  getAll,
  getProductById,
  addProduct,
  updateProductById,
};
