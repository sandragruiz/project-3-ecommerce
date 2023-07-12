const { Schema, model } = require('mongoose');

const wishlistSchema = new Schema (
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

const Wishlist = model('Wishlist', wishlistSchema);

module.exports = Wishlist;