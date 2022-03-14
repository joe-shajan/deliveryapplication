import express from 'express'
import { signin, signup } from '../controllers/userControllers.js';
const router = express.Router()

 
router.route('/').post(signup)
router.route('/signin').post(signin)




export default router;