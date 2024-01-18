//const express = require('express')
import express from 'express';

//require('dotenv').config()

const app = express()

const port = process.env.PORT || 4000;


app.get('/',(req,res)=>{
    res.send('Hello world! ')
})

app.get('/login',(req,res)=>{
    res.send('<h1>User Login Successfully .</h1>')
})

app.listen(port,() => {
console.log(`Example app listening on ${port}`)
})

