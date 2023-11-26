import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";


// @desc Fetch All Products
// @route GET/api/products
// @access Public

const gerProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});


// @desc Fetch a Products
// @route GET/api/products/:id
// @access Public

const gerProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});


export {gerProductById, gerProducts}


