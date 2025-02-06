// import orderModel from '../models/orderModel.js'; // Assuming orderModel is imported
// import userModel from '../models/userModel.js';   // Assuming userModel is imported


const placeOrder = async (req, res) => {
//   try {
//     // Destructure values from req.body
//     const { userId, items, amount, address } = req.body;

//     // Prepare the order data
//     const orderData = {
//       userId,
//       items,
//       amount,
//       address,
//       paymentMethod: "COD",
//       payment: false,
//       date: Date.now(),
//     };

//     // Create a new order
//     const newOrder = new orderModel(orderData);

//     // Save the order to the database
//     await newOrder.save();

//     // Optionally, update user data (e.g., clearing the cart after placing the order)
//     await userModel.findByIdAndUpdate(userId, { cartData:{} } );

//     // Send a success response
//     res.status(200).json({success:true, message: "Order placed successfully!", order: newOrder });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({success:false, message: "Error placing the order.", error: error.message });
//   }
// };
}
const placeOrderStripe = async (req,res) => {

}

const placeOrderRazorpay = async (req,res) => {
    
}

const allOrders = async (req,res) => {
    
}

const userOrders = async (req,res) => {
    
}

const updateStatus = async (req,res) => {
    
}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders, updateStatus}
