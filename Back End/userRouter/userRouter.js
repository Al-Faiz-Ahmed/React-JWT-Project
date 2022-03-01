import express from "express";
import User from "../models/userModel.js";
import { users } from "../productsData.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userRouter = express.Router();

function generateToken(user) {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      email: user.email,
    },
    "secret_key",
    { expiresIn: "30d" }
  );
}
userRouter.get(
  "/seed",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const createdUsers = await User.insertMany(users);
    res.send({ createdUsers });
  })
);
userRouter.post(
  "/signin",
  asyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            name: user.name,
            isAdmin: user.isAdmin,
            email: user.email,
            token: generateToken(user),
          });
        } else {
          throw "Password not matched.";
        }
      } else {
        throw "User not Registered.";
      }
    } catch (error) {
      res.status(401).send({ message: error });
    }
  })
);

export default userRouter;
