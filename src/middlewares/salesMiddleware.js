const productModel = require('../models/productModel');

const validateSale = async (req, res, next) => {
  const sales = req.body;
  const productIdField = sales.every((sale) => sale.productId);
  const quantField = sales.every((sale) => sale.quantity !== undefined && sale.quantity !== null);
  const quantValue = sales.every((sale) => sale.quantity > 0);

  if (!productIdField) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (!quantField) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (!quantValue) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  const products = await Promise.all(sales.map((sale) =>
    productModel.getProductById(sale.productId)));

  const isInvalidProduct = products.some((product) => product === undefined);
  if (isInvalidProduct) return res.status(404).json({ message: 'Product not found' });
  next();
};

module.exports = {
  validateSale,
};
