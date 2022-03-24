import express from 'express'
import { addProduct, deleteProduct, editProduct, getAllProducts, getAllProductswithoutSkip, getProduct, searchProducts } from '../controllers/productControllers.js';
import { edituploadProductImage, uploadProductImage } from '../middlewares/productMiddlewares.js';
const router = express.Router()

 
router.route('/').post(addProduct,uploadProductImage)

router.route('/:storeid/:productid').delete(deleteProduct)

router.route('/:storeid/:productid').put(editProduct,edituploadProductImage)

router.route('/products/:storeid/:skip').get(getAllProducts)

router.route('/search-products/:storeid/:search').get(searchProducts)

router.route('/products/:storeid').get(getAllProductswithoutSkip)

router.route('/:storeid/:productid').get(getProduct)





export default router;