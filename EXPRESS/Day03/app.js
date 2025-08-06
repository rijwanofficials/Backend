const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Mern-Developer:password89@cluster0.pgywz1l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected!')
    })
    .catch((err) => {
        console.log("DB connection error-->>", err.message);
    })