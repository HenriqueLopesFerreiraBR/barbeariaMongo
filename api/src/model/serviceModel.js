const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    value:{
        type:String
    }
},
{timestamps:true}
);

module.exports = mongoose.model("Service",ServiceSchema);
