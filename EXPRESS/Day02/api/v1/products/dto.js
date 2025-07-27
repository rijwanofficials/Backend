//It's gaurd validator
// Check the validity of POST request
const validateProductForCreation = (req, res, next) => {
    console.log("--->Inside the validateProductForCreation");
    try {
        const data = req.body;
        const { title, price, quantity } = data;
        if (!title || title.length < 5) {
            res.status(400).json({
                isSuccess: false,
                message: " Title is too short!"
            });
        };

        if (!price || price.length <= 0) {
            res.status(400).json({
                isSuccess: false,
                message: "Invalid Price"
            });
        };

        if (!quantity || quantity.length <= 0) {
            res.status(400).json({
                isSuccess: false,
                message: "Invalid Qauntity"
            });
        };
        req.body = { title: title.trim(), price, quantity };
        next();
    }
    catch (err) {
        console.log("Error in validateProductForCreation:", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal server error"
        });
    }
}

module.exports = { validateProductForCreation }