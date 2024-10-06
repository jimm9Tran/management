const Product = require("../../models/product.model")
const ProductCategory = require("../../models/product-category.model");
const createTreeHelper = require("../../helpers/createTree");
const productCategoryHelper = require("../../helpers/product-category");

// [GET] /products
module.exports.index = async (req, res) => {
    try {
        const products = await Product.find({
            status: "active",
            deleted: false
        }).sort({ position: "desc" });

        // Correct discount calculation
        const newProducts = products.map(item => {
            const discountFactor = (100 - item.discountPercentage) / 100; // Calculating discounted price
            item.priceNew = item.price * discountFactor;
            return item;
        });

        const productsCategory = await ProductCategory.find({
            deleted:false
        });
        const newProductCategory = createTreeHelper.tree(productsCategory);

        res.render("client/pages/products/index", {
            pageTitle: "Danh sách sản phẩm",
            products: newProducts,
            newProductCategory: newProductCategory
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Lỗi hệ thống! Không thể tải sản phẩm.");
    }
};


// [GET] /products/:slug
module.exports.detail = async (req, res) => {
    try {
        const find = {
            deleted: false,
            status: "active",
            slug: req.params.slugProduct
        };

        const product = await Product.findOne(find);

        if(product.product_category_id) {
            const category = await ProductCategory.findOne({
                _id: product.product_category_id,
                status: "active",
                deleted: false
            });

            product.category = category;

        }

        if (!product) {
            return res.status(404).send("Sản phẩm không tồn tại.");
        }

        res.render("client/pages/products/detail", {
            pageTitle: product.title,
            product: product
        });
    } catch (error) {
        console.error("Error fetching product detail:", error);
        res.status(500).send("Lỗi hệ thống! Không thể tải chi tiết sản phẩm.");
    }
};

// [GET] /products/:slugCategory
module.exports.category = async (req, res) => {
    const category = await ProductCategory.findOne({
        slug: req.params.slugCategory,
        status: "active",
        deleted: false
    });

    const listSubCategory = await productCategoryHelper.getSubCategory(category.id);
    const listSubCategoryId = listSubCategory.map(item => item.id);

    const products = await Product.find({
        product_category_id: { $in: [category.id, ...listSubCategoryId] },
        deleted: false
    }).sort({position: "desc"});
    
    res.render("client/pages/products/index", {
        pageTitle: category.title,
        products: products,
    });
};
