const express = require("express");
const users = require("./users");
const auth = require("./auth");
const isLogged = require("./utils/isLogged");
const logout = require("./utils/logout");
const menu = require("./menu");
const categories = require("./categories");
// const items = require("./items");
// const orders = require("./orders");

module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/registration", users);
    app.use("/login", auth);
    app.use("/islogged", isLogged);
    app.use("/logout", logout);
    app.use("/menu", menu);
    app.use("/category", categories);
    // app.use("/order", orders);
};
