const mongoose = require('mongoose')


const ProdutoSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    descricao:{
        type: Text,
    },
    marca:{
        type: String,
    },

})

module.exports = mongoose.model('produto',ProdutoSchema)