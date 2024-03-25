const { Router } = require("express");

const {
  createInfo,
} = require("../controllers/info");

const infoValidationRules = require("../middlewares/validateInfo");

infoRoute = new Router();

infoRoute
  .route("/info")
  .post(
    infoValidationRules,
    createInfo
  );


module.exports = infoRoute;
