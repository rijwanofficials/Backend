const express = require("express");

const productRouter = express.Router();

// GET "/api/v1/products"
productRouter.get("/", (req, res) => {
    res.status(200).send("(GET)Dummy products endpoint.... ")
});

// POST "/api/v1/products"
productRouter.post("/", (req, res) => {
    res.status(200).send("(POST)Dummy products endpoint.... ")
});

// PATCH "/api/v1/products/:productId"
productRouter.patch("/:productId", (req, res) => {
    res.status(200).send("(PATCH)Dummy products endpoint.... ")
});

// DELETE "/api/v1/products/:productId"
productRouter.delete("/:productId", (req, res) => {
    res.status(200).send("(DELETE)Dummy products endpoint.... ")
});


module.exports = { productRouter };