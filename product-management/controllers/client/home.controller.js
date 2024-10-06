const Product = require("../../models/product.model");

// [GET] /
module.exports.index = async (req, res) => {
    //Lấy sản phẩm nổi bật
    const productsFeatured = await Product.find({
        featured: "1",
        deleted: false,
        status: "active"
    }).limit(8);
    // End Lấy sản phẩm nổi bật

    // Hiển thị danh sách sản phẩm mới nhất
    const productsNew = await Product.find({
        deleted: false,
        status: "active"
    }).sort({position: "desc"}).limit(8);
    // End Hiển thị danh sách sản phẩm mới nhất

    res.render("client/pages/home/index", {
        pageTitle: "Trang chủ",
        productsFeatured: productsFeatured,
        productsNew: productsNew
    });
};