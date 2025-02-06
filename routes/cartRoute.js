import express from 'express'
import { addToCarrt, getUserCart, upadateCart } from '../controller/cartController.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser,addToCarrt)
cartRouter.post('/upadate',authUser,upadateCart)

export default cartRouter