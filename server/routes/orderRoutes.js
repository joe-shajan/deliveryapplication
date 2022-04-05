import express from 'express'
import { changeOrderStatus, createOrder, getOrderByOrderid, getOrdersByStoreid, getOrdersByUserid } from '../controllers/orderController.js';
const router = express.Router()

router.route('/').post(createOrder) 

router.route('/:orderid').get(getOrderByOrderid).put(changeOrderStatus)

router.route('/store/:storeid').get(getOrdersByStoreid)

router.route('/user/:userid').get(getOrdersByUserid)

export default router;