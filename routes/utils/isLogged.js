const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const cookieParser = require("cookie-parser");
router.use(cookieParser());

router.get("/", auth, async (req, res) => {
    res.send(req.user);
});

module.exports = router;
