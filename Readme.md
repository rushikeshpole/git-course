# Learning the backend project
1) Created A Node Package Using command "npm init" .
2) Added a start command in node json package .

3) Installed Express
```javascript
const express = require('express')
const app = express()
port = 4000;

app.get('/',(req,res)=>{
    res.send('Hello world! ')
})

app.listen(port,() => {
console.log(`Example app listening on ${port}`)
})
```
4)  Deploying The Product
-----------------------------------------------
5)  Introduce Json Formatter
6)  Installed vite(ReactJs)
8)  Created basic page using Reactjs
```
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  })
  return (
    <>
    <h2>Rushikesh Learning The Basics Of Reactjs</h2>
    <p>Jokes: {jokes.length}</p>

    {
      jokes.map(function (joke , index) {
    return <div key = {joke.id}>
     <h3>{joke.title}</h3>
     <p>{joke.content}</p>
    </div>
    })
    }
    </>
  )
}

export default App

```
9)  Installed axios to web acess
10) Got Problem with CORS (Whitelisting IP To Fix It)
11) Using Proxies (Update the vite configuration    file added the server block in it with proxy .)
12) Avoid the bad practice of merging the js files in react using "npm run build " and adding it into backend which will terminate the effect of change in forntend files .
```
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

app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id : "1" ,
            title : "First Jokes",
            content : 'This is a joke'
        }
        ,{
            id : "2" ,
            title : "First Jokes",
            content : 'This is a joke'
        },{
            id : "3" ,
            title : "First Jokes",
            content : 'This is a joke'
        },{
            id : "4" ,
            title : "First Jokes",
            content : 'This is a joke'
        }
    ]
    res.send(jokes)
})

app.listen(port,() => {
console.log(`Example app listening on ${port}`)
})

```


-----------------------------------------------
13) introduction to Mongoose 
14) The model get converted into plural and lower case to store in database .
15) Used The schema reference through ObjectId
```
import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity :{
        type :Number,
        required : true
    }
})

const orderSchema = new mongoose.Schema({
   orderPriceP: {
    type: Number,
    required: true
   },
   customer :{
    type : mongoose.Schema.Types.ObjectId,
    ref:"User"
   },
   orderItem:{
    type : [orderItemSchema]
    // type :[
    //     {
    //         productId : {
    //             type : mongoose.Schema.Types.ObjectId,
    //             ref: "Product"
    //         },
    //         quantity :{
    //             type :Number,
    //             required : true
    //         }
    //     }
    // ]
   },
   address :{
    type: String,
    required :true,
   },
   status :{
    type:String,
    enum:["Pending","Cancelled","Delivered"],
    default : "Pending"
   }
},{timestamps:true})

const Order = mongoose.model("Order",orderSchema)
```
15) We create a .gitkeep file to push the empty folder .
16) .gitignore creator .
17)  We used prettier and nodemon created .prettier file 
18) 


