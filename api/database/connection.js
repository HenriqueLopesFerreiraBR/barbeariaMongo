const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();


// const URL = "mongodb+srv://developer:342124@shop.2db0ldr.mongodb.net/?retryWrites=true&w=majority"
const URL = process.env.URL_DB

const connectDatabase = async ()=> {
    await mongoose.connect(URL,(error) =>{
        if (error) {
            console.log('Não foi possivel se conectar ao bando de dados por causa do erro' , error);
        } else {
            console.log('banco de dados conectado com sucesso');
        }
    });
};

module.exports = {connectDatabase}