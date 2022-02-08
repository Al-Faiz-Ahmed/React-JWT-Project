import express from "express";
import data from "./productsData.js";
import cors from 'cors';
var port = process.env.port || 5000;
var app = express();


app.get('/',(req,res)=>{
  res.send('server started')
})

app.get('/api/products',(req,res)=>{
  res.json(data)
})


app.listen(port,()=>{
  console.log(`================ Sever Started at http://localhost:${port} ================`)
})