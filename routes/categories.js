const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { Category, validateCatg } = require("../models/category");

router.get("/", async (req, res) => {
    const category = Category.findOne({});
    try {
        res.send(category);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/", [auth, admin], async (req, res) => {
    const { error } = validateCatg(req.body);
    if (error) return res.status(404).json({ error: error.details[0].message });

    const { name } = req.body;

    try {
        let category = await Category.findOne({ name: name });
        if (category) {
            return res.status(400).json({ error: "Name Already Exists." });
        }

        category = new Category({ name });
        res.status(200).json("Success");
        await category.save();
    } catch (err) {
        for (feild in err.errors) {
            return res.status(404).json({ error: err.errors[feild].message });
        }
    }
});

module.exports = router;
