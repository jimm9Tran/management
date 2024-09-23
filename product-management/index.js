const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
require("dotenv").config();

const db = require("./config/database");
db.connect();

const route = require("./routers/client/index.route");
const routeAdmin = require("./routers/admin/index.route");

const app = express()
const port = process.env.PORT;
  
app.use(methodOverride("_method"));


app.set("views", "./view");
app.set("view engine", "pug");


// App Locals Variables
const systemConfig = require("./config/system")
app.locals.prefixAdmin = systemConfig.prefixAmin;

// parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static("public"));

// Routes
route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
}); 