const dashboardRoutes = require("./dashboard.route");
const systemConfig =require("../../config/system")

module.exports = (app) => {
    const PATH_ADMIN = systemConfig.prefixAmin;
    app.use("/admin/dashboard", dashboardRoutes);
};