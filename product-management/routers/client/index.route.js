const homeRoutes = require("./home.route");
const productRoutes = require("./product.route");

module.exports = (app) => {
    app.use("/products", productRoutes);
    
    app.use("/",homeRoutes );
};