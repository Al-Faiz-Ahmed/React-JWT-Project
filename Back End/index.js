import express from "express";
import data from "./productsData.js";
var port = process.env.port || 5000;
var app = express();


app.get('/api/products',(req,res)=>{
  res.json(data)
})
app.get('/',(req,res)=>{
  res.send('server started')
})



















app.listen(port,()=>{
  console.log(`================ Sever Started at https://localhost:${port} ================`)
})
