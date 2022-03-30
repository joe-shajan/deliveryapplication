import express from 'express'
const router = express.Router()
import { addProduct, deleteProduct, editProduct, getAllProducts, getAllProductswithoutSkip, getProduct, getProductByCategory, searchProducts, searchProductsFromAllStores } from '../controllers/productControllers.js';
import { edituploadProductImage, uploadProductImage } from '../middlewares/productMiddlewares.js';


router.route('/').post(addProduct, uploadProductImage)


router.route('/:storeid/:productid').delete(deleteProduct)

router.route('/:storeid/:productid').put(editProduct, edituploadProductImage)

router.route('/products/:storeid/:skip').get(getAllProducts)

router.route('/search-products/:storeid/:search').get(searchProducts)

router.route('/products/:storeid').get(getAllProductswithoutSkip)

router.route('/search/:search').get(searchProductsFromAllStores)

router.route('/:storeid/:productid').get(getProduct)

router.route('/:category').get(getProductByCategory)


export default router; 