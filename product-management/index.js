const express = require("express");
require("dotenv").config();

const db = require("./config/database");
db.connect();

const route = require("./routers/client/index.route");
const routeAdmin = require("./routers/admin/index.route");

const app = express()
const port = process.env.PORT;
const systemConfig = require("./config/system");
app.set("views", "./view");
app.set("view engine", "pug");

app.use(express.static("public"));

// App Locals Variables
const systemConfig = require("./config/system")
app.locals.prefixAdmin = systemConfig.prefixAmin;

// App locals Variables
app.locals.prefixAdmin = systemConfig.prefixAmin; 

// Routes
route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
}); 