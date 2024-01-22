const express = require('express')
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose  = require('mongoose');
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3030

const ProductSchema = new mongoose.Schema({
    productImg: String,
    productName: String,
    price: Number,
})

const ProductModel =  mongoose.model("Product" , ProductSchema)

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/products', async (req, res) => {

    const products = await ProductModel.find({})
    if (products.length===0) {
        return res.send({status:"success", msg:"empty data", data:[]})
    }else{
        return res.send({status:"success", msg:"get data", data:products})
    }
  })


  app.get('/api/products/:id', async (req, res) => {
    const {id} = req.params

    const findProduct = await ProductModel.findById(id)
    if (!findProduct) {
        return res.send({status:"success", msg:"get product", findProduct})
    }else{
        return res.send({status:"success", msg:"get product", data:findProduct})
    }
  })


  app.post('/api/products/', async (req, res) => {
    const body = req.body

    if (body) {
        const newProduct = new ProductModel(body)
        await newProduct.save()
        return res.send({status:"success", msg:"post products", data: newProduct})
    }else{
        return res.send({status:"error", msg:"Internal Server Error"})
    }
  })



  app.delete('/api/products/:id', async (req, res) => {
    const {id} = req.params

    if (id) {
        const deletedProduct = await ProductModel.findById(id)
        await ProductModel.findByIdAndDelete(id)
        return res.send({status:"success", msg:"get product", data: deletedProduct})
    }else{
        return res.send({status:"error", msg:"Internal Server Error"})
    }
  })






app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("Connected Mongo Db"))