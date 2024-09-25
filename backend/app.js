const express = require('express')
const cors = require('cors')
const employeeroutes = require('./routes/employeeroutes')

const app = express()
app.use(cors())

app.use('/employee',employeeroutes)

app.listen(6000,()=>{
    console.log('Server Running')
})
