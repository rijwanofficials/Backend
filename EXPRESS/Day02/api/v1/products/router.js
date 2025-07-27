const express = require("express");
const { createProductController, getProductController } = require("./controllers");
const { validateProductForCreation } = require("./dto");

const productRouter = express.Router();

// GET "/api/v1/products"
productRouter.get("/", getProductController);

// POST "/api/v1/products"
productRouter.post("/", validateProductForCreation, createProductController)   // midleware chaining

// PATCH "/api/v1/products/:productId"
productRouter.patch("/:productId", (req, res) => {
    res.status(200).send("(PATCH)Dummy products endpoint.... ")
});

// DELETE "/api/v1/products/:productId"
productRouter.delete("/:productId", (req, res) => {
    res.status(200).send("(DELETE)Dummy products endpoint.... ")
});


module.exports = { productRouter };