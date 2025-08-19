const express = require("express");
const { productRouter } = require("./product/routes");
const { signupRouter } = require("./auth/routes");
const { otpRouter } = require("./otp/routes");
const apiRouter = express.Router();

apiRouter.use("/products", productRouter);
apiRouter.use("/auth", signupRouter);
apiRouter.use("/otps", otpRouter);
module.exports = { apiRouter, signupRouter, otpRouter };
