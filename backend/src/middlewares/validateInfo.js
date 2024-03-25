const { body } = require('express-validator');

const { Info } = require('../models/Info');

const validateExistEmail =  async (value, { req }) => {

    const existingEmail = await Info.findOne({ where: { email: value } });

    if (existingEmail) {
        throw new Error("email already exist");
    }

    return true;
};

const infoValidationRules = [
    body("name").notEmpty().isString().isLength({ min: 8 }).withMessage("name at least 8 character"),
    body("phone").isNumeric().trim().matches(/^01\d{9}$/).withMessage("Invalid phone number."),
    body("email").isEmail().trim().withMessage("Invalid email address").custom(validateExistEmail),
];

module.exports = infoValidationRules;