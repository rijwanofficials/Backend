const express = require('express');
const morgan = require('morgan');
const { apiRouter } = require('./api/v1/router');

const app = express();


app.use(morgan("dev"));  //app level midleware


app.get("/", (req, res) => {
    res.status(200).json({
        isSuccess: true,
        message: "Server is working fine...... "
    })
})

app.use("/api/v1",apiRouter)   //will manage anyrequest that comes up with /api/v1
app.listen(3800, () => {
    console.log("------Server Started-------");
})