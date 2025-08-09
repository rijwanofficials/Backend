const express = require("express");
// PProduct Controller
const { editProductController, getAllProductController, createProductController, deleteProductController } = require("./controllers");

// Product Validator
const { createProductValidator, updateProductValidator, } = require("./dto");


const productRouter = express.Router();

productRouter.post("/", createProductValidator,createProductController);

productRouter.get("/", getAllProductController);

productRouter.patch('/:id', updateProductValidator, editProductController);

productRouter.delete('/:id', deleteProductController);



module.exports = { productRouter };
