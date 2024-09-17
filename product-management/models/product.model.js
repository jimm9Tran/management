const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    tags: [String],
    brand: String,
    sku: String,
    weight: Number,
    dimensions: Object,
    warrantyInformation: String,
    shippingInformation: String,
    availabilityStatus: String,
    reviews: [String],
    returnPolicy: String,
    minimumOrderQuantity: Number,
    meta: Object,
    images: [String],
    thumbnail: String,
    deleted: Boolean
});

const Product = mongoose.model("Products", productSchema, "products");

module.exports = Product;