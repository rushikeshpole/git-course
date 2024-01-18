const express = require('express')
require('dotenv').config()
const app = express()
port = 4000;

app.get('/',(req,res)=>{
    res.send('Hello world! ')
})

app.get('/login',(req,res)=>{
    res.send('<h1>User Login Successfully .</h1>')
})

app.listen(process.env.PORT,() => {
console.log(`Example app listening on ${port}`)
})

