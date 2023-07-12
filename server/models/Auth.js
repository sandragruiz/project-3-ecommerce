const {Schema, model } = require('mongoose');

const authSchema = new Schema(
    {
        token: {
            type: String
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    }
);

const Auth = model('Auth', authSchema);

module.exports = Auth;