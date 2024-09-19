const Products = require("../../models/product.model");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");

// [GET] /admin/produts
module.exports.index = async (req, res) => {


    let fillterStatus = [
        {
            name: "Tất cả",
            status: "",
            class: "active"
        },
        {
            name: "Hoạt động",
            status: "active",
            class: ""
        },
        {
            name: "Dừng hoạt động",
            status: "inactive",
            class: ""
        }
    ]

    let find =  {

    }
    if (req.query.status){
        find.status = req.query.status;
    }

    if (req.query.status){
        const index = fillterStatus.findIndex(iten => item.status = req.query.status);
        fillterStatus[index].class = "active";
    }{
        const index = fillterStatus.findIndex(iten => item.status = "");
        fillterStatus[index].class = "active";
    }

    const objectSearch = searchHelper(req.query);
    if (objectSearch.regex){
        find.title = objectSearch.regex;
    }
    // End Search
    
    // Pagination
    const countProducts = await Products.countDocuments(find);

    let objectPagination = paginationHelper(
        {
            limitItems: 5,
            currentPage: 1
        },
        req.query,
        countProducts
    )

    
    // End Pagination

    const products = await Products.find(find)
    .limit(objectPagination.limitItems)
    .skip(objectPagination.currentPage);

    res.render("admin/pages/products/index", {
        pageTitle: "Trang Sản Phẩm",
        products: products,
        keyword: objectSearch.keyword,
        fillterStatus: fillterStatus,
        pagination: objectPagination
    });
};