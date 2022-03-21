const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.clearCookie("JWT", { path: "/" });
        res.json({ message: "Logout Successfully" });
    } catch (err) {
        return res.status(404).send(err);
    }
});

module.exports = router;
