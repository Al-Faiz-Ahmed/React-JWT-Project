import express from "express";
import Products from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import productsDetails from "../productsData.js";
import Order from "../models/orderModel.js";

const productsRouter = express.Router();

productsRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Products.find({});
    res.send(products);
  })
);

productsRouter.get(
  "/seed",
  asyncHandler(async (req, res) => {
    await Products.deleteMany({});
    const createdProducts = await Products.insertMany(productsDetails);
    res.send({ createdProducts });
  })
);
productsRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      let product = await Products.findById(req.params.id);
      res.send(product);
    } catch (err) {
      res.status(404).send({ message: "Product not Found." });
    }
  })
);
productsRouter.put(
  "/:id/review",
  asyncHandler(async (req, res) => {
    const { orderId, update } = req.body;
    const UpdateReview = await Products.findById(req.params.id);
    const UpdateOrderReview = await Order.findById(orderId);
    if (UpdateReview) {
      if (UpdateOrderReview) {
        UpdateReview.review = [...UpdateReview.review, update];
        await UpdateReview.save();
        const userReview = UpdateOrderReview.orderItems.find((x) => x.product_Id == req.params.id)
        userReview.review = req.body.update
        const updatedUserReview =  await UpdateOrderReview.save()
        res.send(updatedUserReview.orderItems.find((x) => x.product_Id == req.params.id).review)
    }
    }
  })
);

export default productsRouter;
