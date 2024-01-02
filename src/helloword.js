const express = require("express"); //khai báo express
const path = require("path"); //dùng path
require("dotenv").config(); //dùng biến môi trường

const app = express();
const port = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("view");
});

app.listen(port);
