const { readOrders, saveOrders, editOrders } = require("../../../models/orderModel");
const { myReadfile } = require("../../../utils/fileHelper");

const getOrdersControllers = async (req, res) => {
    console.log("-->Inside the getOrdersControllers");
    try {
        const orders = await readOrders();
        res.status(201).json({
            isSuccess: true,
            message: "Fetched orders",
            data: {
                orders: orders
            }
        })
    }
    catch (err) {
        console.log("Error in Order Controller");
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server error"
        });
    };
};


const CreateOrdersControllers = async (req, res) => {
    console.log("-->Inside the CreateOrdersControllers");
    try {
        const data = req.body;
        await saveOrders(data);
        res.status(201).json({
            isSuccess: true,
            message: "created orders"
        })
    }
    catch (err) {
        console.log("Error in CreateOrdersControllers", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server error"
        });
    };
};

const editOrdersControllers = async (req, res) => {
    console.log("-->Inside the editOrdersControllers");
    try {
        const { orderId } = req.params;
        const data = req.body;
        await editOrders(data, orderId);
        res.status(201).json({
            isSuccess: true,
            message: "update orders"
        })
    }
    catch (err) {
        console.log("Error in editOrdersControllers", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server error"
        });
    };
};

module.exports = { getOrdersControllers, CreateOrdersControllers, editOrdersControllers }