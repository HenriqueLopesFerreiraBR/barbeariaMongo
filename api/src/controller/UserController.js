const User = require("../model/userModel");
const { getById } = require("./ServiceController");

const UserController = {
    registe: async (req, res) => {
        try {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            });

            const user = await newUser.save();

            res.status(201).json(user);
        } catch (error) {
            res.status(401).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Conta atualizada");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await User.find();

            res.status(200).json(users);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    getById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            const { password, updatedAt, ...other } = user._doc;
            res.status(200).json(other);
        } catch (error) {}
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json("Usuario não existe");
            }
            await User.findByIdAndDelete(id);
        } catch (error) {
            res.status(405).json(error);
            console.log(error);
        }
    },
};

module.exports = UserController;
