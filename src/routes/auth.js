const { User, validateAuth } = require("../models/user");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is from Auth");
});

router.post("/", async (req, res) => {
    const { error } = validateAuth(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { email, pass } = req.body;
    try {
        let person = await User.findOne({ email: email });
        if (!person) {
            return res.status(404).json({ error: "Invalid Email or Password" });
        }
        const validpass = await bcrypt.compare(pass, person.pass);
        if (!validpass) {
            return res.status(404).json({ error: "Invalid Email or Password" });
        }
        const token = person.generateAuthToken();
        res.header("x-token", token).json({ message: person });
    } catch (err) {
        for (feild in err.errors) return res.status(404).send(err.errors[feild].message);
    }
});

module.exports = router;
