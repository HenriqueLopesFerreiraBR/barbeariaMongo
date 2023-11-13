const express = require("express");
const routes = express.Router();
const HorarioController = require("../controller/HorarioController");

routes.post("/", HorarioController.create);

routes.put("/:id", HorarioController.update);

routes.get("/", HorarioController.getAll);

routes.get("/:id", HorarioController.getById);

routes.delete("/:id", HorarioController.delete);

module.exports = routes;
