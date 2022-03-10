import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";

import productRoutes from './routes/productsRoutes.js'
import storeRoutes from './routes/storesRoutes.js'

connectDB()
const app = express()
dotenv.config()

app.use(express.json({limit: '25mb'}))
app.use(express.urlencoded({ limit: "25mb", extended: true }))


app.use('/product',productRoutes)
app.use('/store',storeRoutes)

app.get('/',(req,res)=>{
    res.status(200).json({project:'Connection Successfull'})
})


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server started at port: ${PORT}`))