const { UserModel } = require("../../../models/userSchema");

const usersignupController = async (req, res) => {
    try {
        console.log("<-----Inside usersignupController------>");
        const { email, password } = req.body;
        // const salt = await bcrypt.genSalt(15)
        // // increasing the computation in order of 2^x where x is rounds
        // // higher the number ,more secure it is ,it is more computationally heavy---->>slower
        // console.log("salt--->>", salt);
        // const hashedPassword = await bcrypt.hash(password.toString(), salt);
        // console.log("Hashed Password---->>", hashedPassword);
        // const hashedPassword = await bcrypt.hash(password.toString(), 12);
        const newUser = await UserModel.create({
            email,
            password,
        });

        res.status(201).json({
            isSuccess: true,
            message: "User Created",
            data: {
                user: {
                    email: newUser.email,
                    id: newUser._id
                }
            }
        });

    } catch (err) {
        console.log("<-----Error In usersignupController------>", err);

        if (err.name === "ValidationError" || err.code === 11000) {
            return res.status(400).json({
                isSuccess: false,
                message: err.message,
                data: {}
            });
        }

        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {}
        });
    }
};

module.exports = { usersignupController };
