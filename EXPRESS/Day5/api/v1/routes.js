const express = require("express");
const { productRouter } = require("./product/routes");
const { signupRouter } = require("./auth/routes");
const { otpRouter } = require("./otp/routes");
const { usersRouter } = require("./users/routes");
const apiRouter = express.Router();

apiRouter.use("/products", productRouter);
apiRouter.use("/auth", signupRouter);
apiRouter.use("/otps", otpRouter);
apiRouter.use("/users", usersRouter);
module.exports = { apiRouter };
