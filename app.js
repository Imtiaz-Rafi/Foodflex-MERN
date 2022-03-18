require("dotenv").config();
const winston = require("winston");

const express = require("express");
const app = express();

require("./src/start/logger")();
require("./src/db/db")();
require("./src/routes/routes")(app);
require("./src/start/config")();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    // console.log("Listening on port",port);
    winston.info(`Server Listening to Port ${port}`);
});
