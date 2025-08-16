const express = require("express");
const { productRouter } = require("./product/routes");
const { signupRouter } = require("./auth/routes");
const apiRouter = express.Router();

apiRouter.use("/products", productRouter);
apiRouter.use("/auth", signupRouter);

module.exports = { apiRouter, signupRouter };
