const Products = require("../../models/product.model");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");

// [GET] /admin/produts
module.exports.index = async (req, res) => {


    let fillterStatus = [
        {
            name: "Tất cả",
            status: "",
            class: ""
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
        deleted: false
    }

    if (req.query.status){
        find.status = req.query.status;
    }

    if (req.query.status){
        const index = fillterStatus.findIndex(item => item.status == req.query.status);
        fillterStatus[index].class = "active";
    }else{
        const index = fillterStatus.findIndex(item => item.status == "");
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
            limitItems: 10,
            currentPage: 1
        },
        req.query,
        countProducts
    )

    
    // End Pagination

    const products = await Products.find(find)
        .sort({position: "desc"})
        .limit(objectPagination.limitItems)
        .skip((objectPagination.currentPage - 1) * objectPagination.limitItems);

    res.render("admin/pages/products/index", {
        pageTitle: "Trang Sản Phẩm",
        products: products,
        keyword: objectSearch.keyword,
        fillterStatus: fillterStatus,
        pagination: objectPagination
    });
};

// [PATCH] //admin/products/change-status/:status:/id
module.exports.changeStatus = async (req, res) => {
    const status = req.params.status;
    const id = req.params.id;

    await Products.updateOne({_id: id}, {status: status});

    req.flash('success', 'Sản phẩm đã được cập nhật thành công.');

    res.redirect("back");
};

// [PATCH] //admin/products/change-multi
module.exports.changeMulti = async (req, res) => {
    const type = req.body.type;
    const ids = req.body.ids.split(", ");
    
    switch(type){
        case "active":
            await Products.updateMany({_id: { $in: ids }}, {status: "active"});
            req.flash('success', `Cập nhật trạng thái thành công ${ids.length} sản phẩm.`);
            break;

        case "inactive":
            await Products.updateMany({_id: { $in: ids }}, {status: "inactive"});
            req.flash('success', `Cập nhật trạng thái thành công ${ids.length} sản phẩm.`);
            break;
        
        case "delete-all":
            await Products.updateMany({_id: { $in: ids }}, 
                {
                    deleted: true, 
                    deleteAt: new Date()
                });
            req.flash('success', `Xóa thành công ${ids.length} sản phẩm.`);
            break;
        
        case "change-position":
            for (const item of ids){
                let [id, position] = item.split("-");
                position = parseInt(position);
                console.log(id);
                console.log(position);

                await Products.updateOne({ _id: id },
                    {position: position}
                );
            req.flash('success', 'Sản phẩm đã được cập nhật thành công.');
            }
            break;

        default:
            break;
    }

    res.redirect("back");
};

// [PATCH] //admin/products/delete/:id
module.exports.deleteItem = async (req, res) => {
    const id = req.params.id;

    // await Products.deleteOne( { _id: id} );
    await Products.updateOne({ _id: id}, {deleted: true, deleteAt: new Date()});
    

    res.redirect("back");
};