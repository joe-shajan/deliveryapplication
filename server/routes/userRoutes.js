import express from 'express'
import { getUserDetails, signin, signup } from '../controllers/userControllers.js';
const router = express.Router()

router.route('/:userid').get(getUserDetails) 

router.route('/').post(signup)

router.route('/signin').post(signin)




export default router;