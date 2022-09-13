const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../src/models/connection");
const productModel = require("../../../src/models/productModel");

const productsFromDb = require("./productModel.mock");

describe("Testes de unidade do model de produtos", function () {
  afterEach(sinon.restore);

  it("Realizando uma busca de todos os produtos", async function () {
    sinon.stub(connection, "execute").resolves([productsFromDb]);

    const result = await productModel.getAll();

    expect(result).to.deep.equal(productsFromDb);
  });

  it("Realizando a busca de um produto especifico", async function () {
    sinon.stub(connection, "execute").resolves([[productsFromDb[0]]]);

    const result = await productModel.getProductById(1);

    expect(result).to.deep.equal(productsFromDb[0]);
  });
});
