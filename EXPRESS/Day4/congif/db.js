const { default: mongoose } = require('mongoose');

mongoose.connect(
     process.env.MONGO_DB_URL, {
    dbName: "day-4-express"
}).then(() => {
    console.log("-- ----Data Base Connected-----------");
}).catch((err) => {
    console.log("DB Connection Error--->", err.message);
})