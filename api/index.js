const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const connectDatabase = require('./database/connection')


const userRouter = require('./src/router/userRouter')
const serviceRouter = require('./src/router/serviceRouter')
const clienteRouter = require('./src/router/clienteRouter')


const port = 3005


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())


connectDatabase.connectDatabase();


app.use('/api/user/',userRouter)
app.use('/api/service/',serviceRouter)
app.use('/api/cliente/',clienteRouter)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))