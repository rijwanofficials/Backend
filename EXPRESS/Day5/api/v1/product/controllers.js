const mongoose = require('mongoose');
const { ProductModel } = require('../../../models/productSchema');

const createProductController = async (req, res) => {
    try {
        console.log("-----Inside createProductController-----");
        const data = req.body;
        const newProduct = await ProductModel.create(data);
        res.status(201).json({
            isSuccess: true,
            message: "Product Created...",
            data: {
                product: newProduct,
            }
        })
    }
    catch (err) {
        console.log("----Error inside createProductController--->>", err.message);
        if (err.name == "ValidationError" || err.code == 1100) {
            res.status(400).json({
                isSuccess: false,
                message: err.message,
                data: {}
            });
            return;
        };
        res.status(500).json({
            isSuccess: false,
            message: "internal Server Error",
            data: {}
        });
    }
}

const getAllProductController = async (req, res) => {
    console.log("-----Inside getAllProductController-----");
    try {
        const products = await ProductModel.find();
        res.status(200).json({
            isSuccess: true,
            message: "Products fetched successfully...",
            data: {
                products: products
            }
        });
    } catch (err) {
        res.status(500).json({
            isSuccess: false,
            message: "Failed to fetch products",
            error: err.message
        });
    }
}
module.exports = { createProductController, getAllProductController }