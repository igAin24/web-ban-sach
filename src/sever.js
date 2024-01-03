const express = require("express"); //khai báo express
const configView = require("./config/viewConfig");
const router = require("./routes/router");
const mysql = require("mysql2");
require("dotenv").config(); //dùng biến môi trường

const app = express();
const port = process.env.PORT || 8080;

configView(app);

app.use(router);

const testConnection = mysql.createConnection({
  host: panh,
  password: "123456",
  port: 3307,
});

app.listen(port);
