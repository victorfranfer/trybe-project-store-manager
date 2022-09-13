const connection = require('./connection');

const addSale = async ({ saleId, productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (saleId, productId, quantity) VALUE (?, ?, ?)',
    [saleId, productId, quantity],
  );

  return saleId;
};

const addSaleDate = async () => {
  const date = new Date();
  const [saleDate] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (?)', [date],
  );

  return saleDate.insertId;
};

module.exports = {
  addSale,
  addSaleDate,
};
