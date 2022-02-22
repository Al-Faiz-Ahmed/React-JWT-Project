import express from "express";
import User from "../models/userModel.js";
import { users } from "../productsData.js";
import asyncHandler from "express-async-handler";
const userRouter = express.Router();

userRouter.get(
  "/seed",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const createdUsers = await User.insertMany(users);
    res.send({ createdUsers });
  })
);

export default userRouter;
