import express from 'express'
import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router();
import Product from '../models/productModel.js';




router.get('/', asyncHandler(async (req, res) => {
       const products = await Product.find({});
       console.log(products)
       res.json(products)
}))


router.get('/:id',asyncHandler(async (req,res)=>{
     const product = await Product.findById(req.params.id)
     if(product){
        res.json(product)
     }
     res.status(404)
     throw new Error('Product not found')
}))




export default router;