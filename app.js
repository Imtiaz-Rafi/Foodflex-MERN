require("dotenv").config();
const winston = require("winston");

const express = require("express");
const app = express();

require("./src/start/logger")();
require("./src/db/db")();
require("./src/routes/routes")(app);
require("./src/start/config")();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("This is From server.");
});

const path = require("path");
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    winston.info(`Server Listening to Port ${port}`);
});
