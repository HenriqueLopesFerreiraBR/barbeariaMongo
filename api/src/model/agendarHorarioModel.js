const mongoose = require("mongoose");

const HorarioSchema = new mongoose.Schema(
    {
        cliente: {
            type: String,
            required: true,
            unique: true,
        },
        servicos: {
            type: Array,
        },
        dataAgenda:{
            type:String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Horarios", HorarioSchema);
