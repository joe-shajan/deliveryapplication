import express from 'express'
import { addToCart, getAllCartItems } from '../controllers/cartControllers.js'
const router = express.Router()

router.route('/:userid').get(getAllCartItems)
router.route('/add-item/:userid/:storeid/:productid').get(addToCart)


export default router