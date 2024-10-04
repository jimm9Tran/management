const Account = require("../../models/account.model");
const systemConfig = require("../../config/system");
const md5 = require("md5");

// [GET] /admin/auth/login
module.exports.login = (req, res) => {
    res.render("admin/pages/auth/login", {
        pageTitle: "Trang đăng nhập"
    });
};

// [POST] /admin/auth/loginPost
module.exports.loginPost = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Account.findOne({
        email: email,
        deleted: false
        }
    );

    if (!user) {
        req.flash("error", "Email không tồn tại!");
        res.redirect("back");
        return;
    }
    
    if (md5(password) != user.password) {
        req.flash("error", "Mật khẩu không chính xác");
        res.redirect("back");
        return;
    }

    if (user.status != "active") {
        req.flash("error", "Tài khoản đã bị khóa");
        res.redirect("back");
        return;
    }

    res.redirect(`${systemConfig.prefixAmin}/products`);
};