const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
    },
    listings: [{
      type: Schema.Types.ObjectId,
      ref: 'Listing',
    }],
    wishlist: [{
      type: Schema.Types.ObjectId,
      ref: 'Listing',
    }],
    cart: [{
      type: Schema.Types.ObjectId,
      ref: 'Listing',
    }],
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;