import express from 'express'
import { addProduct, getAllProducts, getAllProductswithoutSkip, getProduct } from '../controllers/productControllers.js';
import { uploadProductImage } from '../middlewares/productMiddlewares.js';
const router = express.Router()

 
router.route('/').post(addProduct,uploadProductImage)

router.route('/products/:storeid/:skip').get(getAllProducts)

router.route('/products/:storeid').get(getAllProductswithoutSkip)

router.route('/:storeid/:productid').get(getProduct)





export default router;