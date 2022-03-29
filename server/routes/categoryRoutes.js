import express from 'express'
const router = express.Router()
import { addNewCategory, getAllCategorys } from '../controllers/categoryControllers.js'
import { uploadCategoryImage } from '../middlewares/categoryMIddleware.js'

router.route('/').get(getAllCategorys)

router.route('/').post(addNewCategory,uploadCategoryImage)

export default router