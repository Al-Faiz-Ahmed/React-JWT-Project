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
app.get('/api/products/:id',(req,res)=>{
  // res.json(data)
  const product = data.find(x => x._id === req.params.id)
  if(product){
    res.send(product)
  }else{
    res.status(404).send({message:"Product not Found"})
  }
})


app.listen(port,()=>{
  console.log(`================ Sever Started at http://localhost:${port} ================`)
})