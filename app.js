require("dotenv").config();
const winston = require("winston");

const express = require("express");
const app = express();

require("./src/start/logger")();
require("./src/db/db")();
require("./src/routes/routes")(app);
require("./src/start/config")();

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
    // Accessing the Path Module
    const path = require("path");
    app.use(express.static(path.resolve(__dirname, "./client/build")));
    app.get("*", function (req, res) {
        res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
    });
}

app.listen(port, () => {
    // console.log("Listening on port",port);
    winston.info(`Server Listening to Port ${port}`);
});
