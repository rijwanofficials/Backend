// const createProductValidator = (req, res, next) => {
//     try {
//         console.log("----Inside createProductValidator----");
//         const { title, price, discription, quantity } = req.body;
//         if (quantity && quantity < 0) {
//             res.status(400).json({
//                 isSuccess: false,
//                 message: "Quantity should be > 0 ",
//                 data: {}
//             })
//             return;
//         }

//         if (!price || price < 1) {
//             res.status(400).json({
//                 isSuccess: false,
//                 message: "price should be > 1",
//                 data: {}
//             })
//             return;
//         }

//         if (!title || title.length <= 2) {
//             res.status(400).json({
//                 isSuccess: false,
//                 message: "title length >2 ",
//                 data: {}
//             })
//             return;
//         }

//         if (discription && discription < 5) {
//             res.status(400).json({
//                 isSuccess: false,
//                 message: "discription is too short....",
//                 data: {}
//             })
//             return;
//         }
//         next();
//     }
//     catch (err) {
//         console.log("----Error Inside createProductValidator---->", err.message);
//         res.status(500).json({
//             isSuccess: false,
//             message: "internal Server Error",
//             data: {}
//         });
//     }
// }

// module.exports = { createProductValidator };

const validateProduct = (isPatch = false) => {
    return (req, res, next) => {
        try {
            const { title, price, discription, quantity } = req.body;

            // Quantity validation
            if (quantity !== undefined && quantity < 0) {
                return res.status(400).json({
                    isSuccess: false,
                    message: "Quantity should be > 0",
                    data: {}
                });
            }

            // Price validation
            if (!isPatch || price !== undefined) {
                if (!price || price < 1) {
                    return res.status(400).json({
                        isSuccess: false,
                        message: "Price should be > 1",
                        data: {}
                    });
                }
            }

            // Title validation
            if (!isPatch || title !== undefined) {
                if (!title || title.length <= 2) {
                    return res.status(400).json({
                        isSuccess: false,
                        message: "Title length must be > 2",
                        data: {}
                    });
                }
            }

            // Description validation
            if (discription !== undefined && discription.length < 5) {
                return res.status(400).json({
                    isSuccess: false,
                    message: "Description is too short",
                    data: {}
                });
            }

            next();
        } catch (error) {
            res.status(500).json({
                isSuccess: false,
                message: "Validation error",
                error: error.message
            });
        }
    };
};

module.exports = {
    createProductValidator: validateProduct(false), // POST
    updateProductValidator: validateProduct(true)   // PATCH
};
