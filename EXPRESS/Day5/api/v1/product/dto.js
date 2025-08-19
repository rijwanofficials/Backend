const createProductValidator = (req, res, next) => {
    try {
        console.log("----Inside createProductValidator----");
        const { title, price, discription, quantity } = req.body;

        // Quantity validation
        if (quantity && quantity < 0) {
            return res.status(400).json({
                isSuccess: false,
                message: "Quantity should be >= 0",
                data: {}
            });
        }

        // Price validation
        if (!price || price < 1) {
            return res.status(400).json({
                isSuccess: false,
                message: "Price should be > 1",
                data: {}
            });
        }

        // Title validation
        if (!title || title.length <= 2) {
            return res.status(400).json({
                isSuccess: false,
                message: "Title length must be > 2",
                data: {}
            });
        }

        // Description validation
        if (discription && discription.length < 5) {
            return res.status(400).json({
                isSuccess: false,
                message: "Description is too short",
                data: {}
            });
        }

        next();
    } catch (err) {
        console.error("----Error Inside createProductValidator---->", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {}
        });
    }
};



const updateProductValidator = (req, res, next) => {
    console.log("------Inside the UPDATE product validator--------");
    try {
        const { title, price, discription, quantity } = req.body;

        // Quantity validation
        if (quantity && quantity < 0) {
            res.status(400).json({
                isSuccess: false,
                message: "Quantity should be > 0 ",
                data: {}
            });
            return;
        }

        // Price validation (only if provided)
        if (price || price < 1) {
            res.status(400).json({
                isSuccess: false,
                message: "price should be > 1",
                data: {}
            });
            return;
        }

        // Title validation (only if provided)
        if (!title || title.length <= 2) {
            return res.status(400).json({
                isSuccess: false,
                message: "Title length must be > 2",
                data: {}
            });
        }

        // Description validation (only if provided)
        if (discription && discription.length < 5) {
            return res.status(400).json({
                isSuccess: false,
                message: "Description is too short",
                data: {}
            });
        }

        next();
    } catch (err) {
        res.status(500).json({
            isSuccess: false,
            message: "Validation error",
            err: err.message
        });
    }
};


module.exports = { createProductValidator, updateProductValidator };
