const express = require("express");
const { createProductController, getAllProductController } = require("./controllers");
const { createProductValidator, } = require("./dto");
const productRouter = express.Router();

productRouter.post("/", createProductValidator, createProductController);
productRouter.get("/", getAllProductController);

module.exports = { productRouter };
