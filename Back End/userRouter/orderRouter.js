import express from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import Order from "../models/orderModel.js";
const orderRouter = express.Router();

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  

  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, "secret_key", (err, decode) => {
        if(err){
            res.status(401).send({message:"Invalid Token"})
        }else{
            req.user = decode;
            next()
        }
    });
}else{
      res.status(401).send({message:"Token not Available"})

  }
};

orderRouter.get("/mine",isAuth,asyncHandler(async(req,res)=>{
  const orders = await Order.find({user:req.user._id})
  res.send(orders)
}))
orderRouter.post(
  "/",
  isAuth,
  asyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(404).send({ message: "Cart is Empty" });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user:req.user._id
      });
      const createdOrder = await order.save()
      res.status(201).send({message:'New order created',order:createdOrder})
      
    }
  })
);

orderRouter.get("/:id",isAuth,asyncHandler(async (req,res)=>{
  const order  = await Order.findById(req.params.id)
  if(order){
    res.send(order)
  }else{
    res.status(404).send({message:"Order not Found"})
  }
}))

orderRouter.put("/:id/pay",isAuth,asyncHandler(async(req,res)=>{
  const order  = await Order.findById(req.params.id)
  if(order){
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id:"Configure when PayPal COnnected",
      status:"Configure when PayPal COnnected",
      update_time:"Configure when PayPal COnnected",
      email_address:"Configure when PayPal COnnected"
    }
    const updatedOrder = await order.save() 
    res.send({message:"Order Paid",order:updatedOrder})
  }else{
    res.status(404).send({message:"Order not Found"})
  }
}))



export default orderRouter