import express from 'express'
import { addToCart } from '../controllers/cartControllers.js'
const router = express.Router()

router.route('/add-item/:userid/:storeid/:productid').get(addToCart)


export default router