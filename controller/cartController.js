import userModel from "../model/userModel.js";

// add product to cart
const addToCarrt = async (req,res) =>{

    try {
        const { userId, itemId, colour } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][colour]) {
                cartData[itemId][colour] += 1
            }
            else{
                cartData[itemId][colour] = 1 

            }

        }
        else{
            cartData[itemId] = {}
            cartData[itemId][colour] =1
        }

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success: true,message:"added to cart"})
        
    } catch (error) {
        console.log(error);
        res.json({seccess:false,message:error.message})
    }
}

// add product to cart
const upadateCart = async (req,res) =>{
    try {
        const {userId, itemId,colour,quantity} =req.body
       
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData
        cartData[itemId][colour] = quantity

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"cart updated"})

    } catch (error) {
        console.log(error);
        res.json({seccess:false,message:error.message})
    }
}

// add product to cart
const getUserCart = async (req,res) =>{
    try {
        const {userId} =req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({seccess:true,cartData})

    } catch (error) {
        console.log(error);
        res.json({seccess:false,message:error.message})
    }
}

export {addToCarrt, upadateCart, getUserCart}


