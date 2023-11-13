const express = require("express");

const routes = express.Router();

const UserController = require("../controller/UserController");

routes.get("/", UserController.getAll);

routes.get("/:id", UserController.getById);

routes.post("/register", UserController.registe);

routes.put("/:id", UserController.update);
//
routes.delete("/id", UserController.delete);

module.exports = routes;
