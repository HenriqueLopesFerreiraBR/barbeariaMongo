const express = require("express");
const routes = express.Router();

const ClienteController = require("../controller/ClienteController");

//Cadastrar Cliente
routes.post("/", ClienteController.create);

//Update Cliente
routes.put("/:id", ClienteController.update);

// Find All
routes.get("/", ClienteController.getAll);

//Deletar Cliente
routes.delete("/:id", ClienteController.delete);

// FindID
routes.get("/:id", ClienteController.getByID);

// FindID
routes.post("/name", ClienteController.getByName);

module.exports = routes;
