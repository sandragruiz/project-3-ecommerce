const { Schema, model } = require('mongoose');

const cartSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        items: {
            type: Schema.Types.ObjectId,
            ref: 'Listing'
        }
    }
);

const Cart = model('Cart', cartSchema);

module.exports = Cart;