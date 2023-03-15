const express = require("express");
const routes = express.Router();

const Cliente = require('../model/clienteModel')

routes.post('/', async(req,res)=>{
    try {
        const newCliente = new Cliente({
            name: req.body.name,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            cpf: req.body.cpf,
            fone: req.body.fone,
        })
        const createdCliente = await newCliente.save();

        res.status(201).json(createdCliente);

    } catch (error) {
        res.status(401).json(error);
        console.log(error);
    }
})

routes.get('/', async(req,res)=>{
    try {
        const clientes = Cliente.find({});

        res.status(200).json(clientes)
    } catch (error) {
        res.status(401).json(error)
    }
})


module.exports = routes;