const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 55,
        minlength: 2,
    },
    description: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 2,
    },
    price: {
        type: Number,
        required: true,
    },
    foodImage: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        maxlength: 55,
        minlength: 2,
    },
});

const Menu = mongoose.model("Menu", menuSchema);

function validateMenu(menuSchema) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(55).required(),
        description: Joi.string().min(2).max(255).required(),
        price: Joi.Number().required(),
        foodImage: Joi.string().required(),
        category: Joi.string().min(2).max(55).required(),
    });
    return schema.validate(menuSchema);
}

exports.Menu = Menu;
exports.validateMenu = validateMenu;
