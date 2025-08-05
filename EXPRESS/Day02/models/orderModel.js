const { v4: uuidv4 } = require('uuid');
const { mySaveFile, myReadfile } = require("../utils/fileHelper");

const ORDERS_FILE_PATH = "./models/orders.json";

const saveOrders = async (data) => {
    console.log("--> Inside the saveOrders");
    const orders = await myReadfile(ORDERS_FILE_PATH);
    
    // this validation is for if the title name is safe
    const indx = orders.findIndex((elem) => {
        if (elem.title == data.title) {
            return true;
        } else {
            return false;
        }
    });
    if (indx !== -1) {
        throw new Error("Order with same title is already present");
    }
    data.id = uuidv4();
    orders.push(data);
    await mySaveFile(ORDERS_FILE_PATH, orders);
};

const readOrders = async () => {
    const orders = await myReadfile(ORDERS_FILE_PATH);
    return orders;
};


const editOrders = async (data, orderId) => {
    const orders = await myReadfile(ORDERS_FILE_PATH);
    const indx = orders.findIndex((elem) => {
        return elem.indx == orderId
    })

    // orderId validation
    if (indx == -1) {
        res.status(400);
        res.json({
            isSuccess: false,
            message: "invalid order id...."
        })
        return;
    }

    // updata the object with the updated text
    const oldobj = orders[indx];
    console.log("Before update:", oldobj);
    orders[indx] = { ...oldobj, ...data }
    console.log("After update:", orders[indx]);

    // save the new obj
    await mySaveFile(ORDERS_FILE_PATH, orders);
}

module.exports = { readOrders, saveOrders, editOrders }