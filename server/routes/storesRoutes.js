import express from 'express'
const router = express.Router()
import { getAllStores, getStore, storeLogin, storeSignup } from '../controllers/storeControllers.js'
import { uploadLogo } from '../middlewares/storeMiddleware.js'

router.route('/').post(storeSignup, uploadLogo)
router.route('/stores').get(getAllStores)
router.route('/:storeid').get(getStore)


router.route('/store-login').post(storeLogin)

export default router