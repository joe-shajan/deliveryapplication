import express from 'express'
import { addProduct, getAllProducts, getAllProductswithoutSkip, getProduct, searchProducts } from '../controllers/productControllers.js';
import { uploadProductImage } from '../middlewares/productMiddlewares.js';
const router = express.Router()

 
router.route('/').post(addProduct,uploadProductImage)

router.route('/products/:storeid/:skip').get(getAllProducts)

router.route('/search-products/:storeid/:search').get(searchProducts)

router.route('/products/:storeid').get(getAllProductswithoutSkip)

router.route('/:storeid/:productid').get(getProduct)





export default router;