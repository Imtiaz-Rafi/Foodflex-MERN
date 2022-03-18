const express = require("express");
const { User, validateUser } = require("../models/user");
const bcrypt = require("bcrypt");
const router = express.Router();

// router.get("/me", async (req, res) => {
//     const user = await User.findById(req.user._id).select("-pass");
//     res.send(user);
// });

router.post("/", async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(404).json({ error: error.details[0].message });

    const { fname, sname, email, mobile, pass } = req.body;

    try {
        let person = await User.findOne({ email: email });
        if (person) {
            return res.status(400).json({ error: "Email Already Registered." });
        }
        person = new User({
            name: fname + " " + sname,
            email: email,
            mobile,
            pass,
        });

        // bcrypting password
        const salt = await bcrypt.genSalt(10);
        person.pass = await bcrypt.hash(person.pass, salt);
        const token = await person.generateAuthToken();
        res.header("x-token", token).status(200).json({ message: "User Registerd Successfully" });
        // res.status(200).json("Success");
        await person.save();
    } catch (err) {
        for (feild in err.errors) {
            return res.status(404).json({ error: err.errors[feild].message });
        }
    }
});

module.exports = router;
