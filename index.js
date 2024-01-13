// import express from "express"
const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.get('/rs',(req,res)=>{
    res.send(`<h1>Created A Server .</h1>`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})
