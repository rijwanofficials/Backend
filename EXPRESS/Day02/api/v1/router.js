const express = require("express");
const { orderRouter } = require("./orders/router");
const { productRouter } = require("./products/router");

const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
    console.log("API Router Invoked....");
    next();
}) //router level midleware

// api/v1/orders middleware
apiRouter.use("/orders", orderRouter);

// api/v1/products middleware 
apiRouter.use("/products",productRouter);

module.exports = { apiRouter };