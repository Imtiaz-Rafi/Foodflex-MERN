const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 55,
        minlength: 2,
    },
});

const Category = mongoose.model("Category", categorySchema);

function validateCatg(categorySchema) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(55).required(),
    });
    return schema.validate(categorySchema);
}

exports.Category = Category;
exports.validateCatg = validateCatg;
