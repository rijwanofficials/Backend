const mongoose = require('mongoose');
const { ProductModel } = require('../../../models/productSchema');
const { validateObjectId } = require("../../../utils/validateObjectId");

// CREATE Product 
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

// GET Product 
const getAllProductController = async (req, res) => {
    console.log("<-----Inside getAllProductController------>");
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
        console.log("----Error inside getAllProductController--->>", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Failed to fetch products",
            error: err.message
        });
    };
};

// EDIT Product 
const editProductController = async (req, res) => {
    console.log("<-----Inside editProductController------>");
    const { id } = req.params;

    // Validate before proceeding
    if (!validateObjectId(id, res)) return;
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        ).lean();
        if (!updatedProduct) {
            return res.status(404).json({
                isSuccess: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            isSuccess: true,
            message: "Product updated successfully",
            data: { product: updatedProduct }
        })
    } catch (err) {
        console.log("----Error inside editProductController--->>", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Failed to update product",
            error: err.message
        });
    }
};

// DELETE Product 
const deleteProductController = async (req, res) => {
    console.log("<-----Inside deleteProductController------>");
    const { id } = req.params;

    // Validate before proceeding
    if (!validateObjectId(id, res)) return;
    try {
        const product = await ProductModel.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({
                isSuccess: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            isSuccess: true,
            message: "Product deleted successfully",
        })
    } catch (err) {
        console.log("----Error inside deleteProductController--->>", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Failed to delete product",
            error: err.message
        });
    }
};


const listProductController = async (req, res) => {
    try {
        console.log("<-----Inside listProductController------>");
        const { limit, page, select = "title price", q = "", maxPrice, minPrice } = req.query;
        const searchRegex = new RegExp(q, "ig"); //ig is flag where i means case insensitivity and g means global 

        const slelectedItems = select.split(',').join(' ');
        let limitNum = Number(limit);
        if (limitNum <= 0 || Number.isNaN(limitNum)) {
            limitNum = 4;
        }
        // const limit = 4;
        let pageNum = parseInt(page) || 1;
        if (pageNum <= 0 || Number.isNaN(pageNum)) {
            pageNum = 1;
        }
        const skipNum = (pageNum - 1) * limitNum;
        const query = ProductModel.find(); // waiter will come and take the order
        // limit the number or item


        // --------QUERY PARAMETER OPTIONS------




        // SELECT Parameter
        query.select(slelectedItems);

        // SEARCH QUERY Like search?=phone
        query.or([{ title: searchRegex }, { description: searchRegex }]);


        // 1------PRICE QUERY
        const maxpriceNum = Number(maxPrice)
        if (maxPrice && !Number.isNaN(maxpriceNum)) {
            query.where("price").lte(maxPrice)
        }


        // 2------PRICE QUERY
        const minpriceNum = Number(minPrice)
        if (minPrice && !Number.isNaN(minpriceNum)) {
            query.where("price").gte(minPrice);
        }



        const queryCopy = query.clone(); //the clone query will have all the instruction that have been given till now 
        const totalDocumentsCount = await queryCopy.countDocuments();

        // SKIP Parameter
        query.skip(skipNum);
        // LIMIT Parameter
        query.limit(limitNum);//giving waiter some instructions 
        const products = await query //telling waiter that i have given my order now execute it 

        res.status(200).json({
            isSuccess: true,
            message: "Products list...",
            data: {
                products: products,
                total: totalDocumentsCount,
                skip: skipNum,
                limit: Math.min(limitNum, products.length)
            }
        });
    } catch (err) {
        console.log("----Error inside listProductController--->>", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Failed to fetch products",
            error: err.message
        });
    };
};

module.exports = { createProductController, getAllProductController, editProductController, deleteProductController, listProductController }