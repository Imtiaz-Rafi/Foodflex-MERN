const express = require("express");
const users = require("./users");
const auth = require("./auth");
// const items = require("./items");
// const categories = require("./categories");
// const orders = require("./orders");

module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/registration", users);
    app.use("/login", auth);
    // app.use("/menu", items);
    // app.use("/category", categories);
    // app.use("/order", orders);
};
