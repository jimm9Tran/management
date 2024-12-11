const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    // user_id: String,
    cart_id: String,

    userInfor: {
        fullName: String,
        phone: String,
        address: String
    },

    products: [
        {
            product_id: String,
            price: Number,
            discountPercentage: Number, 
            quantity: Number
        }
    ],

    deleted: {
        type: Boolean,
        default: false,
    },
    deletedDate: Date,
}, {
    timestamps: true
});


const Order = mongoose.model("Order", orderSchema, "orders");

module.exports = Order;