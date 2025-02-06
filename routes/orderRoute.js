import express from 'express';
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders, updateStatus} from "../controller/orderController.js"; // Fixed the import statement
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);  // Fixed typo in function name
orderRouter.post('/status', adminAuth, updateStatus);

// Payment Features
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);

// User Feature
orderRouter.post('/userorders', authUser, userOrders);  // Fixed typo in the method name

export default orderRouter;
