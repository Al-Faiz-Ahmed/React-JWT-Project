import express from "express";
import Products from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import productsDetails from "../productsData.js";


const productsRouter = express.Router() 

productsRouter.get('/',asyncHandler(async(req,res)=>{
    const products = await Products.find({})
    res.send(products)
}))

productsRouter.get('/seed',asyncHandler( async(req,res)=>{
    await Products.deleteMany({})
    const createdProducts = await Products.insertMany(productsDetails)
    res.send({createdProducts})
}))
productsRouter.get('/:id',asyncHandler( async(req,res)=>{
    try{
        let product = await Products.findById(req.params.id)
        res.send(product)
        
    }catch(err){
        res.status(404).send({message:"Product not Found."})
    }

}))

export default productsRouter