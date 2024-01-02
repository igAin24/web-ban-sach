const express = require("express"); //khai báo express
const configView = require("./config/viewConfig");
const router = require("./routes/router");
require("dotenv").config(); //dùng biến môi trường

const app = express();
const port = process.env.PORT || 8080;

configView(app);

app.use(router);

app.listen(port);
