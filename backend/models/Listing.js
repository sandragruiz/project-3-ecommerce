/* Name, Description, Price, Color, Condition, Category, Size, Seller (User), CreatedAt */
const { Schema, model } = require('mongoose');
const User = require('./User');
const Category = require('./Category');

const listingSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        color: {
            type: String
        },
        condition: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        seller: {
            User
        },
        createdAt: {
            type: Date,
            required: true
        },
        category_id: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        image: String
    }
)

const Listing = model('Listing', listingSchema);

module.exports = Listing;

