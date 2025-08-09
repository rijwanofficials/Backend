const createProductValidator = (req, res, next) => {
    try {
        console.log("----Inside createProductValidator----");
        const { title, price, discription, quantity } = req.body;
        if (quantity && quantity < 0) {
            res.status(400).json({
                isSuccess: false,
                message: "Quantity should be > 0 ",
                data: {}
            })
            return;
        }

        if (!price || price < 1) {
            res.status(400).json({
                isSuccess: false,
                message: "price should be > 1",
                data: {}
            })
            return;
        }

        if (!title || title.length <= 2) {
            res.status(400).json({
                isSuccess: false,
                message: "title length >2 ",
                data: {}
            })
            return;
        }

        if (discription && discription < 5) {
            res.status(400).json({
                isSuccess: false,
                message: "discription is too short....",
                data: {}
            })
            return;
        }
        next();
    }
    catch (err) {
        console.log("----Error Inside createProductValidator---->", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "internal Server Error",
            data: {}
        });
    }
}

module.exports = { createProductValidator };