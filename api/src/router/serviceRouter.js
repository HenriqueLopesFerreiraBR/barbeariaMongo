const express = require("express");
const routes = express.Router();
const Service = require("../model/serviceModel");

// Cadastrar Serviço
routes.post("/", async (req, res) => {
    try {
        const newServices = new Service({
            name: req.body.name,
            value: req.body.value,
        });

        const createdService = await newServices.save();

        res.status(201).json(createdService);
    } catch (error) {
        res.status(401).json(error);
        console.log(error);
    }
});

// Lista de serviços
routes.get("/", async (req, res) => {
    try {
        const serv = Service.find();
        res.status(200).json(serv);
    } catch (error) {
        res.status(401).json(error);
    }
});

//Atualização no cadastro do Serviço
routes.put("/:id", async (req, res) => {
    try {
        const udpatedService = await Service.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });

        res.status(200).json("Serviço atualizada");
    } catch (error) {
        res.status(500).json(error);
    }
});

//Deletando serviço
routes.delete("/:id", async (req, res) => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        res.status(205).json("Serviço Deletado");
    } catch (error) {
        res.status(501).json(error);
    }
});

//Busca por ID
routes.get('/:id', async(req,res)=>{
    try {
        const service = await Service.findById(req.params.id);
        res.status(201).json(service);
    } catch (error) {
        res.status(401).json(error);
    }
})


//buscar por nome
routes.get('/name', async(req,res)=>{
    const name = req.body.name
    try {
        const service = await Service.findOne(name);
        res.status(201).json(service);
    } catch (error) {
        res.status(401).json(error);
    }
})

module.exports = routes;
