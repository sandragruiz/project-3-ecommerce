/* Name, Description, Price, Color, Condition, Category, Size, Seller (User), CreatedAt */
const { Schema, model } = require('mongoose');

const listingSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        title: {
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
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            required: true
        },
        categories: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    }
)

const Listing = model('Listing', listingSchema);

module.exports = Listing;

