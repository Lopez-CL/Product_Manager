const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'you must provide a first name']
    },
    price: {
        type: Number,
        required: [true, 'you must indicate price of item']
    },
    description: {
        type: String,
        required: [true, 'please describe this product']
    }
},
{timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);