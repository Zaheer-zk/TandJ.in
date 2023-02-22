const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter product name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please Enter product description'],
  },
  price: {
    type: Number,
    required: [true, 'Please Enter product price'],
    maxLength: [8, 'price cannot exceed 8 character'],
  },
  rating: {
    type: Number,
    default: 0,
  },
  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please select a category'],
  },
  stock: {
    type: Number,
    required: [true, 'Please enter product stock'],
    maxLength: [4, 'Stock cannot be more that 4 digits long'],
    default: 1,
  },
  review: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model('Product', productSchema);
