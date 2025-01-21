import express from 'express'
import { loginParent } from '../controllers/studentController.js'
// import detailsOfParent from '../controllers/parentController.js';
// import authParent from '../middlewares/authParent.js'

const parentRouter = express.Router()

parentRouter.post('/login',loginParent)
// parentRouter.get('/detailsofstudent',authParent,detailsOfParent)


export default parentRouter
