require("dotenv").config();
const express = require("express");
// const winston = require("winston");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

require("./start/logger")();
require("./db/db")();
require("./routes/routes")(app);
require("./start/config")();

// app.get("/", (req, res) => {
//     res.send("This is From server.");
// });

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "./client/build")));
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build", "index.html"));
    });
}

app.listen(port, () => {
    console.log(`Server Listening to Port ${port}`);
    // winston.info(`Server Listening to Port ${port}`);
});
