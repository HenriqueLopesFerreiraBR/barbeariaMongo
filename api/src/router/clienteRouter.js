const express = require("express");
const routes = express.Router();

const Cliente = require('../model/clienteModel')

//Cadastrar Cliente
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

//Update Cliente
routes.put('/:id', async(req,res)=>{
    try {
        const updatedCliente = await Cliente.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        })
        res.status(200).json("Cadastro do cliente atualizado");
    } catch (error) {
        res.status(500).json(error);
    }
})

// Find All
routes.get('/', async(req,res)=>{
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes)
    } catch (error) {
        res.status(401).json(error)
    }
})

//Deletar Cliente
routes.delete('/:id', async(req,res)=>{
    const id = req.params.id
    const cliente = req.body

    try {
        const deletedCliente = await Cliente.deleteOne({_id:id})
        res.status(202).json({message:"cliente deletado"})
        //res.status(202).json(deletedCliente)
    } catch (error) {
        res.status(204).json(error)
    }
})

// FindID
routes.get('/:id', async(req,res)=>{
    const id = req.params.id

    try {
        const cliente = await Cliente.findById(id);
        res.status(200).json(cliente)
    } catch (error) {
        res.status(401).json(error)
    }
})

module.exports = routes;