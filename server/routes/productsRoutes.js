import express from 'express'
import { addProduct, getAllProducts, getProduct } from '../controllers/productControllers.js';
import { uploadProductImage } from '../middlewares/productMiddlewares.js';
const router = express.Router()

 
router.route('/').post(addProduct,uploadProductImage)

router.route('/products/:storeid').get(getAllProducts)

router.route('/:storeid/:productid').get(getProduct)




export default router;