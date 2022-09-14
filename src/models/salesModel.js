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

const getAllSales = async () => {
  const query = `
      SELECT ps.sale_id AS saleId,
      ps.product_id AS productId,
      ps.quantity AS quantity,
      s.date AS date
      FROM StoreManager.sales_products AS ps LEFT JOIN StoreManager.sales AS s
      ON ps.sale_id = s.id
      ORDER BY s.id ASC, ps.product_id ASC;
    `;
  const [result] = await connection.execute(query);
  return result;
};

const getSaleById = async (id) => {
  const query = `
      SELECT ps.product_id AS productId,
      ps.quantity AS quantity,
      s.date AS date
      FROM StoreManager.sales_products AS ps LEFT JOIN StoreManager.sales AS s
      ON ps.sale_id = s.id
      WHERE ps.sale_id = ?;
    `;
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  addSale,
  addSaleDate,
  getAllSales,
  getSaleById,
};
