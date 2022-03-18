const express = require("express");
const users = require("./users");
const auth = require("./auth");
const setLocals = require("../middleware/setLocals");
const home = require("./home");
// const items = require("./items");
// const categories = require("./categories");
// const orders = require("./orders");

module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/registration", users);
    app.use("/login", auth);
    app.use("/", home);
    // app.use("/menu", items);
    // app.use("/category", categories);
    // app.use("/order", orders);
    // app.use(setLocals());
};
