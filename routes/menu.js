const { Menu, validateMenu } = require("../models/menu");
const express = require("express");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const router = express.Router();

// CANNOT USE ASYNC FOR FETCHING DATA.. RAISING INTERNAL SERVER ERROR
router.get("/", (req, res) => {
    Menu.find({})
        .then((item) => {
            res.status(200).json(item);
        })
        .catch((err) => {
            res.status(500).json({ error: "Internal Server Error" });
        });
});

router.post("/", [auth, admin], async (req, res) => {
    const { error } = validateMenu(req.body);
    if (error) return res.status(404).json({ error: error.details[0].message });

    const { name, description, price, image, category } = req.body;

    try {
        let item = await Menu.findOne({ name: name });
        if (item) {
            return res.status(400).json({ error: "Name Already Exists." });
        }

        item = new Menu({
            name,
            description,
            price,
            image,
            category,
        });
        res.status(200).json("Success");
        await item.save();
    } catch (err) {
        for (feild in err.errors) {
            return res.status(404).json({ error: err.errors[feild].message });
        }
    }
});

module.exports = router;
