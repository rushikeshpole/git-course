// require ('dotenv').config({path: './env'})
import connectDB  from "./db/db.js";
import dotenv from "dotenv"

connectDB()

// import express from 'express'
// const app = express()
// ;(async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//        app.on("error",() => {
//         console.log("Error" ,error);
//         throw error
//        })

//       app.listen(process.env.PORT , () => {
//         console.log(`App Is Listening On ${process.env.PORT}`);
//       })

//     } catch (error) {
//         console.error("Error :",error)
//         throw error
//     }
// })()