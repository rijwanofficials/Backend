const express = require("express");
const { getOrdersControllers, CreateOrdersControllers, editOrdersControllers } = require("./controllers");


const orderRouter = express.Router();

// GET "/api/v1/products"
orderRouter.get("/", getOrdersControllers)

// POST "/api/v1/products"
orderRouter.post("/", CreateOrdersControllers)

// PATCH "/api/v1/products"
orderRouter.patch("/:productId", editOrdersControllers);

// DELETE "/api/v1/products"
// orderRouter.delete("/:productId", (req, res) => {
//     res.status(200).send("(DELETE)Dummy orders endpoint.... ")
// });


module.exports = { orderRouter };