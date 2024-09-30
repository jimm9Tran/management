const ProductCategory = require("../../models/product-category.model");
const systemConfig = require("../../config/system");

// [GET] //admin/product-category
module.exports.index = async (req, res) => {
    let find = {
        deleted: false
    }

    const records = await ProductCategory.find(find);

    res.render("admin/pages/products-category/index", {
        pageTitle: "Trang danh mục sản phẩm",
        records: records
    });
};

// [GET] //admin/product-category/create
module.exports.create = (req, res) => {
    res.render("admin/pages/products-category/create", {
        pageTitle: "Tạo danh mục"
    });
};

// [POST] //admin/product-category/create
module.exports.createPost = async (req, res) => {
    // req.body.price = parseInt(req.body.price);
    // req.body.discountPercentage = parseInt(req.body.discountPercentage);
    // req.body.stock = parseInt(req.body.stock);

    if (req.body.position == "") {
        const countProducts = await ProductCategory.countDocuments();
        req.body.position = countProducts + 1;
    }else {
        req.body.position = parseInt(req.body.position);
    }

    const record = new ProductCategory(req.body);
    await record.save();

    res.redirect(`${systemConfig.prefixAmin}/product-category`);
};