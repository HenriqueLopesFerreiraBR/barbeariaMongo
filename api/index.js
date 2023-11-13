const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv')
const connectDatabase = require('./database/connection')
dotenv.config()

//Rotas
const userRouter = require('./src/router/userRouter')
const serviceRouter = require('./src/router/serviceRouter')
const clienteRouter = require('./src/router/clienteRouter')
const AgendamentoRouter = require('./src/router/horarioRouter')
const ProdutoRouter = require('./src/router/produtoRouter')


const port = process.env.PORT


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

//conexão com banco de dados
connectDatabase.connectDatabase();


app.use('/api/user/',userRouter)
app.use('/api/service/',serviceRouter)
app.use('/api/cliente/',clienteRouter)
app.use('/api/agendamento/',AgendamentoRouter)
app.use('/api/produto/',ProdutoRouter)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))