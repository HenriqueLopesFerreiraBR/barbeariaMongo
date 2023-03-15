const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    sobrenome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true,
        max:50,
        unique:true
    },
    cpf:{
        type: Number,
        required: true,
        unique:true
    },
    fone:{
        type: String,
        max: 15
    },
    
})

module.exports = mongoose.model('Cliente',ClienteSchema);