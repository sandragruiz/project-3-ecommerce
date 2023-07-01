/* Seller, Buyer, Items, Price, Total, Payment, Status */
const { model, Schema } = require('mongoose');
const User = require('./User');
const Listing = require('./Listing');

const orderSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        customer: {
            User,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        payment: {
            type: String,
            required: true,
        },
        shippingAddress: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true
        },
        items: {
            type: Schema.Types.ObjectId,
            ref: 'Listing'
        }
    }
)

const Order = model('Order', orderSchema);

module.exports = Order;