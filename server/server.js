import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";

import connectDB from "./config/db.js";

import productRoutes from './routes/productsRoutes.js'
import storeRoutes from './routes/storesRoutes.js'
import userRouter from './routes/userRoutes.js'
import cartRouter from './routes/cartRoutes.js'
import categoryRouter from './routes/categoryRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import reportRouter from './routes/reportRoutes.js'
import errorControllers from "./controllers/errorControllers.js";

connectDB()
const app = express()
app.use(morgan('tiny'))
dotenv.config()

app.use(express.json({ limit: '25mb' }))
app.use(express.urlencoded({ limit: "25mb", extended: true }))


app.get('/', (req, res) => {
    res.status(200).json({ deliveryApplication: 'Connection Successfull' })
})
app.use('/product', productRoutes)
app.use('/store', storeRoutes)
app.use('/user', userRouter)
app.use('/cart', cartRouter)
app.use('/category', categoryRouter)
app.use('/order',orderRouter)
app.use('/report',reportRouter)


app.use(errorControllers)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started at port: ${PORT}`))