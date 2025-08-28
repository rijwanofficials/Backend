const express = require("express");
// PProduct Controller
const { editProductController, getAllProductController, createProductController, deleteProductController, listProductController } = require("./controllers");

// Product Validator
const { createProductValidator, updateProductValidator, } = require("./dto");
const { validateUsersLoggedInMiddleware } = require("../middleware");

const productRouter = express.Router();

productRouter.post("/", createProductValidator, createProductController);

// chaining middleware-------******
// productRouter.get("/", validateUsersLoggedInMiddleware, listProductController);

// router lavel middleware 
productRouter.use(validateUsersLoggedInMiddleware)
// secured apis

productRouter.get("/", listProductController);


productRouter.get("/all", getAllProductController);

productRouter.patch('/:id', updateProductValidator, editProductController);

productRouter.delete('/:id', deleteProductController);

module.exports = { productRouter };
