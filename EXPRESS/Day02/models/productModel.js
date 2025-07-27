const { v4: uuidv4 } = require('uuid');
const { mySaveFile, myReadfile } = require('../utils/fileHelper');

const PRODUCTS_FILE_PATH = "./models/product.json";
const saveProducts = async (data) => {
    const products = await myReadfile(PRODUCTS_FILE_PATH);

    const indx = products.findIndex((elem) => {
        if (elem.title == data.title) {
            return true;
        } else {
            return false;
        }
    });
    if (indx !== -1) {
        throw new Error("Product with same title is already present");
    }



    data.id = uuidv4();
    products.push(data);
    await mySaveFile(PRODUCTS_FILE_PATH, products)
};

const readProducts = async (data) => {
    const products = await myReadfile(PRODUCTS_FILE_PATH);
    return products;
};

module.exports = { saveProducts, readProducts };