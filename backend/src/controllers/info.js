const { Info } = require('../models/Info');

const { validationResult } = require('express-validator');



const createInfo = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      return res.status(400).json({ errors: errorMessages });
  }

    const newInfo = await Info.create({
      ...req.body,
    })

    res.status(201).json({
      message: "success",
      data: {
        Info: newInfo,
      },
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createInfo,
};
