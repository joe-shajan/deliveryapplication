import express from 'express'
import { getAllStores, getStore, storeLogin, storeSignup } from '../controllers/storeControllers.js'
import { uploadLogo } from '../middlewares/storeMiddleware.js'
const router = express.Router()

router.route('/').post(storeSignup, uploadLogo)
router.route('/stores').get(getAllStores)
router.route('/:storeid').get(getStore)


router.route('/store-login').post(storeLogin)

export default router