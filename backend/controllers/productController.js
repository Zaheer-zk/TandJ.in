const PRODUCT = require('../models/productModels');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
//Create Products -- ADMIN
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await PRODUCT.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

//Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await PRODUCT.find();
  res.status(200).json({ success: true, products });
});

//Get product details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await PRODUCT.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({ success: true, product });
});

//Update Products -- ADMIN
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await PRODUCT.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  product = await PRODUCT.findByIdAndUpdate(req.params.id, req.body, {
    success: true,
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ success: true, product });
});

//Delete Product -- ADMIN
exports.deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await PRODUCT.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  await product.remove();
  res
    .status(200)
    .json({ success: true, message: 'Product removed successfully' });
});
