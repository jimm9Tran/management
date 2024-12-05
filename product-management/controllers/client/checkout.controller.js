const Cart = require("../../models/cart.model");
const Product = require("../../models/product.model");

// [GET] /checkout
module.exports.index = async (req, res) => {
    const cartId = req.cookies.cartId;

    const cart = await Cart.findOne({
        _id: cartId
    });

    if(cart.products.length > 0) {
        for (const item of cart.products) {
            const productId = item.product_id;
            const productInfor = await Product.findOne({
                _id: productId,   
            }).select("title thumbnail slug price");
            


            item.productInfor = productInfor;
            item.totalPrice = productInfor.price * item.quantity;
        }
    }

    cart.totalPrice = cart.products.reduce((sum, item) => sum + item.totalPrice, 0)

    res.render("client/pages/checkout/index", {
        pageTitle: "Order",
        cartDetail: cart
    });
}


