const Product = require("../../models/product.model");

// [GET] /search
module.exports.index = async (req, res) => {
    const keyword = req.query.keyword;

    let products = [];

    if (keyword) {
        const regex = new RegExp(keyword, "i");
        products = await Product.find({
            title: regex,
            deleted: false,
            status: "active"
        });
    }

    res.render("client/pages/search/index", {
        pageTitle: "Kết quả tìm kiếm",
        keyword: keyword,
        products: products
    });

}