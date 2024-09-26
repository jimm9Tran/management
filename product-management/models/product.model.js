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
    deleted: Boolean,
    status: String,
    deleteAt: Date
});


// const Product = mongoose.model('Product', productSchema);

const Product = mongoose.model("Products", productSchema, "products");


async function updateProductPositions() {
    try {
        // Lấy danh sách sản phẩm, sắp xếp theo trường bạn muốn (ví dụ: theo createdAt)
        const products = await Product.find().sort({ createdAt: 1 });

        // Sử dụng vòng lặp để cập nhật từng sản phẩm với trường position
        for (let i = 0; i < products.length; i++) {
            await Product.updateOne(
                { _id: products[i]._id },  // Điều kiện để tìm sản phẩm
                { $set: { position: i + 1 } }  // Cập nhật trường position
            );
        }

        // console.log('Cập nhật position thành công!');
    } catch (error) {
        // console.error('Lỗi khi cập nhật position:', error);
    }
}

module.exports = Product;