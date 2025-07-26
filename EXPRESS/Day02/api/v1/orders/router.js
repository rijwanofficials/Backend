const express = require("express");

const orderRouter = express.Router();

// GET "/api/v1/products"
orderRouter.get("/", (req, res) => {
    res.status(200).send("(GET)Dummy orders endpoint.... ")
});

// POST "/api/v1/products"
orderRouter.post("/", (req, res) => {
    res.status(200).send("(POST)Dummy orders endpoint.... ")
});

// PATCH "/api/v1/products"
orderRouter.patch("/:productId", (req, res) => {
    res.status(200).send("(PATCH)Dummy orders endpoint.... ")
});


// DELETE "/api/v1/products"
orderRouter.delete("/:productId", (req, res) => {
    res.status(200).send("(DELETE)Dummy orders endpoint.... ")
});


module.exports = { orderRouter };