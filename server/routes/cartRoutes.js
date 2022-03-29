import express from 'express'
import { addToCart, decrementItemInCart, deleteItemFromCart, getAllCartItems, incrementItemInCart } from '../controllers/cartControllers.js'
const router = express.Router()



router.route('/:userid').get(getAllCartItems)

router.route('/add-item/:userid/:storeid/:productid').get(addToCart)

router.route('/increment-item/:userid/:productid').put(incrementItemInCart)

router.route('/decrement-item/:userid/:productid').put(decrementItemInCart)

router.route('/delete-item/:userid/:productid').delete(deleteItemFromCart)

export default router