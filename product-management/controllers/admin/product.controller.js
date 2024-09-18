const Products = require("../../models/product.model");
const searchHelper = require("../../helpers/search");

module.exports.index = async (req, res) => {
    let find =  {

    }
    if (req.query.status){
        find.status = req.query.status;
    }

    

    // Search
        // let keyword = "";

        // if (req.query.keyword){
        //     keyword = req.query.keyword; 
        //     const regex = new RegExp(keyword, "i");
        //     find.title = regex;
        // }
    const objectSearch = searchHelper(req.query);
    if (objectSearch.regex){
        find.title = objectSearch.regex;
    }
    // End Search
    
    // Pagination

    let objectPagination = {
        limitItems: 5,
        currentPage: 1
    }

    if (req.query.page){
        objectPagination.currentPage = parseInt(req.query.page);
    }

    objectPagination.skip = (objectPagination.currentPage-1)*objectPagination.limitItems;
    
    const countProducts = await Products.countDocuments(find) 
    const totalPage = Math.ceil(countProducts/objectPagination.limitItems);
    objectPagination.totalPage = totalPage;
    // End Pagination

    const products = await Products.find(find)
    .limit(objectPagination.limitItems)
    .skip(objectPagination.currentPage);

    res.render("admin/pages/products/index", {
        pageTitle: "Trang Sản Phẩm",
        products: products,
        keyword: objectSearch.keyword,
        pagination: objectPagination
    });
};