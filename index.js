require("dotenv-safe").config();
const express = require('express')
const cors = require('cors')
var jwt = require('jsonwebtoken')
const router = require('./src/routes/routes')


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(4000,()=>{
    console.log("Aplicação rodando na porta 4000")
})

app.get('/',(request,response)=>{
    response.send("Api-Sllips...")
})
