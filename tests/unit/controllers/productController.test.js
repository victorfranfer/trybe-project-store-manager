const chai = require("chai");
const sinon = require("sinon");
// const sinonChai = require("sinon-chai");

const { expect } = chai;
// chai.use(sinon);

const productService = require("../../../src/services/productServices");
const productControler = require("../../../src/controllers/productController");
const productsFromDB = require("../models/productModel.mock");

describe("Verificando controller de products", function () {
  describe("Teste de unidade do productController", function () {
    beforeEach(sinon.restore);
    it("Retorna todos os produtos cadastrados", async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, "getAll")
        .resolves({ type: null, message: productsFromDB });

      await productControler.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(productsFromDB)).to.be.true;
    });
    it("Retorna um produto pelo ID", async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, "getProductById")
        .resolves({ type: null, message: productsFromDB[0] });

      await productControler.getProductById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(productsFromDB[0])).to.be.true;
    });
  });
});
