const Role = require("../../models/role.model");
const systemConfig = require("../../config/system");

// [GET] /admin/roles
module.exports.index = async (req, res) => {
    let find = {
        deleted: false
    };

    const records = await Role.find(find);

    res.render("admin/pages/roles/index", {
        pageTitle: "Nhóm quyền",
        records: records
    });
};

// [GET] /admin/roles/create
module.exports.create = async (req, res) => {


    res.render("admin/pages/roles/create", {
        pageTitle: "Tạo Nhóm quyền",
    });
};

// [POST] /admin/roles/createPost
module.exports.createPost = async (req, res) => {
    const record = new Role(req.body);

    await record.save();

    res.redirect(`${systemConfig.prefixAmin}/roles`)
};