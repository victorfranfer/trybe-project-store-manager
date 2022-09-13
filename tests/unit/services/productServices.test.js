const { expect } = require("chai");
const sinon = require("sinon");
const productModel = require("../../../src/models/productModel");
const productService = require("../../../src/services/productServices");
const productsFromDB = require("../models/productModel.mock");

describe("Verificando product service", function () {
  describe("Verifica a busca dos produtos listados no banco", function () {
    it("retorna o array com todos os produtos", async function () {
      sinon.stub(productModel, "getAll").resolves(productsFromDB);

      const result = await productService.getAll();

      expect(result.message).to.deep.equal(productsFromDB);
    });
    it("retorna um produto especifico por ID", async function () {
      sinon.stub(productModel, "getProductById").resolves(productsFromDB[0]);

      const result = await productService.getProductById();

      expect(result.message).to.deep.equal(productsFromDB[0]);
    });
  });
});
