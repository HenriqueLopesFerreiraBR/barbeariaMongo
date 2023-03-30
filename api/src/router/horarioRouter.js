const express = require("express");
const routes = express.Router();
const Horarios = require("../model/agendarHorarioModel");

routes.post("/", async (req, res) => {
    try {
        const newAgendamento = new Horarios({
            cliente: req.body.cliente,
            servicos: req.body.servicos,
            dataAgenda: req.body.dataAgenda,
        });

        const createdAgenda = await newAgendamento.save();

        res.status(201).json(createdAgenda);

    } catch (error) {
        res.status(401).json(error); 
    }
});

routes.put('/:id', async(req,res)=>{
    try {
        const updatedAgendamento = await Horarios.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        })
        res.status(200).json("Agendamento atualizado");
    } catch (error) {
        res.status(500).json(error);
    }
})

routes.get('/', async(req,res)=>{
    
    try {
        const agendamentos = await Horarios.find();

        res.status(200).json(agendamentos)
    } catch (error) {
        res.status(401).json(error)
    }
})

routes.get('/:id', async(req,res)=>{
    const id = req.params.id

    try {
        const agendamento = await Horarios.findById(id);
        res.status(200).json(agendamento)
    } catch (error) {
        res.status(401).json(error)
    }
})

routes.delete('/:id', async(req,res)=>{
    const id = req.params.id
    const agendamento = req.body    
    try {
        const deletedAgendamento = await Horarios.deleteOne({_id:id});
        res.status(202).json({message:"Horario cancelado"})
    } catch (error) {
        res.status(204).json(error)
    }
})

module.exports = routes;
