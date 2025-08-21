const express = require("express");
// const fs = require("fs");
const { myReadfile, mySaveFile } = require("./utils/fs_helper");
const { v4: uuidv4 } = require('uuid');

const app = express();
const FILE_PATH = "./products.json";
const ORDERS_FILE_PATH = "./orders.json";
app.use(express.json());
app.use((req, res, next) => {
    console.log("-->", req.method, req.url);
    next();
}); //midleware

app.get("/api/v1/products", async (req, res) => {
    const productsArray = await myReadfile(FILE_PATH);
    res.json({
        isSuccess: true,
        message: "get request is working......",
        data: {
            Products: productsArray,
        },
    })
});
app.post("/api/v1/products", async (req, res) => {
    const data = req.body;
    console.log("oldData", data);
    const newId = uuidv4();
    data.id = newId;
    console.log("newData", data);
    const oldArray = await myReadfile(FILE_PATH);
    console.log("🚀 ~ oldArray1:", oldArray)
    console.log("🚀 ~ Type of oldArray:", typeof oldArray);
    oldArray.push(data);
    console.log("oldArray2", oldArray);
    await mySaveFile(FILE_PATH, oldArray);
    res.status(201)
    res.json({
        isSuccess: true,
        message: "product created",
    })
});

app.patch("/api/v1/products/:productId", async (req, res) => {
    const { productId } = req.params;
    const data = req.body;
    // get old array
    const products = await myReadfile(FILE_PATH);

    // check if the given id is valid or not 
    const indx = products.findIndex((elem) => {
        return elem.id == productId;
    });

    // productId validation
    if (indx == -1) {
        res.status(400);
        res.json({
            isSuccess: false,
            message: "invalid product id...."
        })
        return;
    }
    
    // array search method find index
    // change the old object to replace its properties
    const oldObj = products[indx];
    products[indx] = { ...oldObj, ...data }
    // update the object --->save in it array
    mySaveFile(FILE_PATH, products)
    // updated array-->save it in file
    res.status(200);
    res.json({
        isSuccess: true,
        message: "Updated products",
        data: {
            products: products[indx]
        }
    })
});

app.delete("/api/v1/products/:productId", async (req, res) => {
    const { productId } = req.params;
    const products = await myReadfile(FILE_PATH);
    const indx = products.findIndex((elem) => {
        return elem.id == productId;
    });
    if (indx == -1) {
        res.status(400);
        res.json({
            isSuccess: false,
            message: "invalid product id...."
        })
        return;
    }
    products.splice(indx, 1);
    mySaveFile(FILE_PATH, products)
    res.status(200);
    res.json({
        isSuccess: true,
        message: "Product deleted",
        data: {}
    })
});


app.post("/api/v1/orders", async (req, res) => {
    const data = req.body;
    const { productId } = data;
    const products = await myReadfile(FILE_PATH);
    // check if the given id is valid or not 
    const indx = products.findIndex((elem) => {
        return elem.id == productId;
    });
    // productId validation
    if (indx == -1) {
        res.status(400);
        res.json({
            isSuccess: false,
            message: "invalid product id...."
        })
        return;
    }

    // reducing the quantity by one since someone bought that one
    const oldObj = products[indx];
    const oldQuantity = products[indx].quantity;

    if (oldQuantity <= 0) {
        res.status(500);
        res.json({
            isSuccess: false,
            message: "Products is out of Stocks..."
        })
        return;
    }
    // will save the the products 
    products[indx] = { ...oldObj, quantity: oldQuantity - 1 };
    mySaveFile(FILE_PATH, products);

    // to create a order
    const orders = await myReadfile(ORDERS_FILE_PATH);
    orders.push({ id: uuidv4(), productId: productId })
    mySaveFile(ORDERS_FILE_PATH, orders);
    res.status(201)
    res.json({
        isSuccess: true,
        message: "order created",
    })
});


app.listen(4900, () => {
    console.log("-------------= Server Started =------------");
});