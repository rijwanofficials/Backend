var cors = require('cors');
require("dotenv").config();
require("./config/db")
const express = require("express");
const morgan = require("morgan");
const { apiRouter } = require("./api/v1/routes");

const PORT = process.env.PORT || 3900;

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL
}));

app.use(morgan("dev")); // for printing in console

app.use(express.json()); // read the body in json formate

app.use("/api/v1", apiRouter);

app.listen(PORT, () => {
    console.log("--------Server started------");
});