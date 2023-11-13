const Produto = require("../model/ProdutoModel");

const ProdutoController = {
    getAll: async (req, res) => {
        try {
            const produtos = await Produto.find();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(401).json(error);
        }
    },

    getByID: async (req,res)=>{
        const id = req.params.id
        try {
            const produto = await Produto.findById(id);
            res.status(200).json(produto)
        } catch (error) {
            res.status(401).json(error)
        }
    },

    getByName: async(req,res)=>{
        const id = req.params.id
        const name = req.body.name
    
        try {
            const produto = await Produto.findOne({name:name});
            res.status(200).json(produto)
        } catch (error) {
            res.status(401).json(error)
            console.log(error)
        }
    },

    create: async (req, res) => {
        try {
            const newProduto = new Produto({
                name: req.body.name,
                descricao: req.body.descricao,
                marca: req.body.marca,
            });
            const createdProduto = await newProduto.save();

            res.status(201).json(createdProduto);
        } catch (error) {
            res.status(401).json(error);
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            const updatedProduto = await Produto.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                }
            );
            res.status(200).json("Cadastro do Produto atualizado");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    delete:async(req,res)=>{
        const id = req.params.id
    
        try {
            const deletedProduto = await Produto.deleteOne({_id:id})
            res.status(202).json({message:"Produto deletado"})
        } catch (error) {
            res.status(204).json(error)
        }
    }
};

module.exports = ProdutoController;
