const Service = require("../model/serviceModel");

const ServiceController = {
    create: async (req, res) => {
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
    },
    getAll: async (req, res) => {
        try {
            const serv = Service.find();
            res.status(200).json(serv);
        } catch (error) {
            res.status(401).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const udpatedService = await Service.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                }
            );

            res.status(200).json("Serviço atualizada");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getById: async (req, res) => {
        try {
            const service = await Service.findById(req.params.id);
            res.status(201).json(service);
        } catch (error) {
            res.status(401).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const deletedService = await Service.deleteOne({
                _id: req.params.id,
            });
            res.status(202).json("Serviço Deletado");
        } catch (error) {
            res.status(204).json(error);
        }
    },
    getByName: async (req, res) => {
        const name = req.body.name;
        try {
            const service = await Service.findOne(name);
            res.status(201).json(service);
        } catch (error) {
            res.status(401).json(error);
        }
    },
};

module.exports = ServiceController;
