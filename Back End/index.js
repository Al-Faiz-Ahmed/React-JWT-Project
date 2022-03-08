import express from "express";
import mongoose from "mongoose";
import userRouter from "./userRouter/userRouter.js";
import dotenv from "dotenv";
import productsRouter from "./userRouter/productRouter.js";
import bodyParser from "body-parser";
import orderRouter from "./userRouter/orderRouter.js";

dotenv.config();

var app = express();
var port = process.env.port || 5000;
mongoose.connect(process.env.mongoDB__URL || "mongodb://localhost/amazona");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("server started");
});

app.use("/api/users", userRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", orderRouter);

app.use((error, req, res, next) => {
  if (error.code === 11000) {
    res.status(500).send({ message: "Email Address already Registered." });
  }
  console.log(error.code);
  res.status(500).send({ message: error.message });
});

app.listen(port, () => {
  console.log(
    `================ Sever Started at http://localhost:${port} ================`
  );
});
