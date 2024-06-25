import { response } from 'express';
import userModel from '../models/UserModels.js'

// add items to user cart
const addToCart = async (req, res) =>{
    try{
        let userData = await userModel.findOne({_id: req.body.userId})
        let cartData = await userData.cartData;
        console.log("cartData",cartData)
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success: true, message:"added To Cart"});
    }
    catch(error){
        res.json({success: false, message: "server Error"})
    }
}

// remove items ot user cart
const removeToCart = async (req, res) =>{

}

// fetch user data
const getCart =async ( req, res)=>{

}
export {addToCart, removeToCart, getCart}