const Products = require("../../models/product.model");
const searchHelper = require("../../helpers/search");

module.exports.index = async (req, res) => {
    console.log(req.query.status);
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
    // console.log(objectSearch);
    if (objectSearch.regex){
        find.title = objectSearch.regex;
    }
     

    const products = await Products.find(find);

    res.render("admin/pages/products/index", {
        pageTitle: "Trang Sản Phẩm",
        products: products,
        keyword: objectSearch.keyword
    });
};