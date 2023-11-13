const express = require("express");
const routes = express.Router();
const ServiceController = require("../controller/ServiceController");

// Cadastrar Serviço
routes.post("/", ServiceController.create);

// Lista de serviços
routes.get("/", ServiceController.getAll);

//Atualização no cadastro do Serviço
routes.put("/:id", ServiceController.update);

//Deletando serviço
routes.delete("/:id", ServiceController.delete);

//Busca por ID
routes.get("/:id", ServiceController.getById);

//buscar por nome
routes.get("/name", ServiceController.getByName);

module.exports = routes;
