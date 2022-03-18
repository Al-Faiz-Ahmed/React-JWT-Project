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
userRouter.post('/register',asyncHandler(async(req,res)=>{
  const user = new User({
    name:req.body.name,
    email:req.body.email,
    password:bcrypt.hashSync(req.body.password,8)
  })
  const createdeUser = await user.save()
  res.send({
    _id: createdeUser._id,
    name: createdeUser.name,
    isAdmin: createdeUser.isAdmin,
    email: createdeUser.email,
    token: generateToken(createdeUser),
  })
}))


userRouter.put("/:id",isAuth,asyncHandler(async(req,res)=>{
  const user = await User.findById(req.params.id)
  const {username, email, password, newPassword } = req.body
  if(user){
    if (bcrypt.compareSync(req.body.password, user.password)) {
      if(username && email && password && newPassword ){
        user.name = username
        user.email = email
        user.password = bcrypt.hashSync(newPassword,8)
        await user.save()
        res.send({
            _id: user._id,
            name: user.name,
            isAdmin: user.isAdmin,
            email: user.email,
            token: generateToken(user),
          });
      }else if(username && email && password){
        user.name = username
        user.email = email
        await user.save()
        res.send({
            _id: user._id,
            name: user.name,
            isAdmin: user.isAdmin,
            email: user.email,
            token: generateToken(user),
          });
      }
    } else {
    res.status(401).send({ message: "Password not Matched." });
    }
  }else{
    res.status(401).send({ message: "User not Found." });
  }
}))
export default userRouter;
