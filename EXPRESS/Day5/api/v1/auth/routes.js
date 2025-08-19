const express = require("express");
const { usersignupController } = require("./controller");
const { usersignupValidator } = require("./dto");
const { validateOtpMiddleware } = require("../otp/middleware");


const signupRouter = express.Router();
signupRouter.post("/signup", usersignupValidator,validateOtpMiddleware, usersignupController);
module.exports = { signupRouter };
