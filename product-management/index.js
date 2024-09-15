const express = require("express");
require("dotenv").config();


const route = require("./routers/client/index.route");


const app = express()
const port = process.env.PORT;

app.set("views", "./view");
app.set("view engine", "pug");

app.use(express.static("public"));

// Routes
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
}); 