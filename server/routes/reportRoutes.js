import express from 'express'
import { getReport } from '../controllers/reportControllers.js';
const router = express.Router()

router.route('/:storeid').get(getReport)


export default router;