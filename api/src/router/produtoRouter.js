const express = require("express");
const routes = express.Router();

const ProdutoController = require("../controller/ProdutoController");

//Cadastrar Cliente
routes.post("/", ProdutoController.create);

//Update Cliente
routes.put("/:id", ProdutoController.update);

// Find All
routes.get("/", ProdutoController.getAll);

//Deletar Cliente
routes.delete("/:id", ProdutoController.delete);

// FindID
routes.get("/:id", ProdutoController.getByID);

// FindID
routes.post("/name", ProdutoController.getByName);

module.exports = routes;
