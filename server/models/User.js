/* Username, email, password, Items the user is selling (Item), payment method info */

const { Schema, model } = require('mongoose');
const Listing = require('./Listing');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    listings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: Listing,
    }],
    wishlist: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: Listing,
    }],
    cart: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: Listing,
    }],
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;