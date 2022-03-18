const { User } = require("../models/user");

module.exports = function () {
    return async (req, res, next) => {
        res.locals.name = true;
        next();
    };
};
