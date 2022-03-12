const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");

module.exports = function () {
    const db = config.get("DB");
    mongoose
        .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => winston.info(`Connected to ${db}`));
};
