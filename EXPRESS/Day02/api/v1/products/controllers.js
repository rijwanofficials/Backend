const { saveProducts, readProducts } = require('../../../models/productModel.js');

const createProductController = async (req, res) => {
    console.log("--->Inside the getProductController");
    try {
        const data = req.body;
        await saveProducts(data);
        res.status(201).json({
            isSuccess: true,
            message: "Product created successfully..."
        });
    } catch (err) {
        console.log("Error in Product controller:", err.message);
        res.status(500).json({
            isSuccess: false,
            message: err.message
        });
    }
};

const getProductController = async (req, res) => {

    console.log("--->Inside the getProductController");
    try {
        const products = await readProducts();
        res.status(201).json({
            isSuccess: true,
            message: "Product fetced successfully...",
            data: {
                products: products
            }
        });
    } catch (err) {
        console.log("Error in Product controller:", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal server error"
        });
    }
};

module.exports = { createProductController, getProductController };
