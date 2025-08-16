const express = require("express");
const { usersignupController } = require("./controller");
const { usersignupValidator } = require("./dto");


const signupRouter = express.Router();
signupRouter.post("/signup", usersignupValidator, usersignupController);
module.exports = { signupRouter };
