const Products = require("../../models/product.model");

module.exports.index = async (req, res) => {
    console.log(req.query.status);
    let find =  {
        // deleted: false
        // status: req.query.status;
    }
    if (req.query.status){
        find.status = req.query.status;
    }

    const products = await Products.find(find);
    // find.status = req.query.status
    // console.log(products);

  

    res.render("admin/pages/products/index", {
        pageTitle: "Trang Sản Phẩm",
        products: products
    });
};