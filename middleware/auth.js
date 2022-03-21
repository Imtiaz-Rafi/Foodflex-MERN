const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../models/user");

module.exports = async (req, res, next) => {
    // const token = req.header("x-token");
    const token = req.cookies.JWT;
    if (!token) return res.status(401).json({ error: "Access Denied, No token Provided" });

    try {
        const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        const user = await User.findOne({ _id: decoded._id });
        if (!user) throw new Error("User Not Found");
        req.user = user;
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid Token" });
    }
};
