require('dotenv').config();

const express = require('express');
const { ProductModel } = require('./models/productSchema');
require("./congif/db")

console.log(process.env);

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newProduct = await ProductModel.create(data);
        console.log(newProduct);
        res.json({
            isSuccess: 'true',
            message: "Product Created"
        })
    } catch (err) {
        console.log(err);
        console.log(err.name);
        console.log(err.code);
        if (err.name = "validationError" || err.code == "11000") {
            res.status(400).json({
                isSuccess: false,
                message: `Validation Failed:${err.message}`,
            });
        }
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
        })
    }
});
app.listen(3800, () => {
    console.log("-----------Server Started-----------");
})

