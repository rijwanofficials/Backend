const usersignupValidator = (req, res, next) => {
    try {
        console.log("<----Inside usersignupValidator------>");
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                isSuccess: false,
                message: "Email and password are required"
            });
        }

        next();
    }
    catch (err) {
        console.log("<-----Error In usersignupValidator------>", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { usersignupValidator };
