const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const cookieParser = require("cookie-parser");
router.use(cookieParser());
router.get("/loggedIn", auth, async (req, res) => {
    console.log("THIS IS HOME FROM SERVER");
    res.send(req.user);
});

module.exports = router;
