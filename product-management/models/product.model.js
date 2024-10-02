const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const productSchema = new mongoose.Schema({
    title: String,
    product_category_id: {
        type: String,
        default: ""
    },
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
    deleted: {
        type: Boolean,
        default: false
    },
    status: String,
    deleteAt: Date,
    position: Number,
    slug: {
        type: String,
        slug: "title",
        unique: true
    }
}, {
    timestamps: true
});


const Product = mongoose.model("Products", productSchema, "products");

module.exports = Product;