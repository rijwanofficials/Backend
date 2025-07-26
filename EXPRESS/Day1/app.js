const express = require("express");
// const fs = require("fs");
const { myReadfile, mySaveFile } = require("./utils/fs_helper");
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());


app.use((req, res, next) => {
    console.log("-->", req.method, req.url);
    next();
}); //midleware

app.get("/api/v1/products", async (req, res) => {
    const productsArray = await myReadfile("./data.json");
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
    const oldArray = await myReadfile("./data.json");
    console.log("🚀 ~ oldArray1:", oldArray)
    console.log("🚀 ~ Type of oldArray:", typeof oldArray);
    oldArray.push(data);
    console.log("oldArray2", oldArray);
    await mySaveFile("./data.json", oldArray);
    res.status(201)
    res.json({
        isSuccess: true,
        message: "product created",
    })
});



app.listen(4900, () => {
    console.log("-------------= Server Started =------------");
});