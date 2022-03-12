const config = require("config");
const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

// ~~~ THIS IS FOR DATABASE DATA ~~~
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 4,
    },
    email: {
        type: String,
        required: true,
        // match: /.*@gmail.*/,
        uniqe: true,
        maxlength: 255,
        minlength: 4,
    },
    mobile: {
        type: Number,
        required: true,
        maxlength: 11,
        minlength: 11,
    },
    pass: {
        type: String,
        required: true,
        minlength: 4,
    },
    isAdmin: Boolean,
    user_terms: Boolean,
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get("jwtPrivateKey"));
    return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(userSchema) {
    const schema = Joi.object({
        fname: Joi.string().min(3).max(50).required(),
        sname: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        mobile: Joi.string().min(11).max(11).required(),
        pass: Joi.string().min(6).max(255).required(),
        user_terms: Joi.custom((user_terms) => {
            if (user_terms === false) {
                throw new Error("User terms failed!");
            }
        }),
    });
    return schema.validate(userSchema);
}
function validateAuth(userSchema) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        pass: Joi.string().min(6).max(255).required(),
    });
    return schema.validate(userSchema);
}

exports.User = User;
exports.validateUser = validateUser;
exports.validateAuth = validateAuth;
