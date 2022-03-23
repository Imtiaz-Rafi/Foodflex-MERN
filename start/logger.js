const winston = require("winston");
require("express-async-errors");

module.exports = function () {
    winston.exceptions.handle(
        new winston.transports.Console({ Colorize: true, prettyPrint: true }),
        new winston.transports.Console({ filename: "logs/exceptionHandler.log" })
    );
    process.on("unhandledRejection", (ex) => {
        throw ex;
    });
    winston.add(new winston.transports.File({ filename: "logs/logfile.log" }));
    if (process.env.NODE_ENV !== "production") {
        winston.add(new winston.transports.Console({ Colorize: true, prettyPrint: true }));
    }
};
