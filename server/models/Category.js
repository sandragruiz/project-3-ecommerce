const { model, Schema } = require('mongoose');

const categorySchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
)

const Category = model('Category', categorySchema);

module.exports = Category;