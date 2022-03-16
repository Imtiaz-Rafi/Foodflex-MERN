const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
    const token = req.header("x-token");
    if (!token) return req.status(401).json({ error: "Access Denied, No token Provided" });

    try {
        const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        req.person = decoded;
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid Token" });
    }
};
