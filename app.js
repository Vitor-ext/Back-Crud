const express = require('express')
const cors = require('cors')
const app = express()



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


const contatosController = require('./controller/ContatosController')
app.use('/', contatosController)


app.listen(3000, () => {
    console.log("O servidor está rodando na porta 3000 !");
})