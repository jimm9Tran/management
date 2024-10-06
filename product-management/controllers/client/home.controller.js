const Product = require("../../models/product.model");

// [GET] /
module.exports.index = async (req, res) => {
    //Lấy sản phẩm nổi bật
    const productsFeatured = await Product.find({
        featured: "1",
        deleted: false,
        status: "active"
    }).limit(8);

    res.render("client/pages/home/index", {
        pageTitle: "Trang chủ",
        productsFeatured: productsFeatured
    });
};