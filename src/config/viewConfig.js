const express = require("express");
const path = require("path");

const configView = (app) => {
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");
  app.use("/public", express.static(path.join(__dirname, "../public")));
};

module.exports = configView;
