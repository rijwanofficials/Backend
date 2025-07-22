const http = require('http')
const fsPromises = require('fs/promises')
const { getProductCards } = require("../utils/productHelper");

const server = http.createServer(async (req, res) => {
    try {
        if (req.url == '/') {
            const data = await fsPromises.readFile("./HomePage.html", "utf-8");
            // <div>
            //     console.log("data", data);
            //     console.log("TypeofData", typeof data);
            //     console.log("---------------------");
            //     console.log("---------------------");
            //     console.log(newData);
            //     console.log("TypeofData", typeof newData);
            // </div>
            const cardStr = await getProductCards();
            const newData = data.replace("__MAIN__", cardStr);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(newData);
        }
        else if (req.url == '/about') {
            const data = await fsPromises.readFile("./AboutPage.html", "utf-8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
        else {
            const data = await fsPromises.readFile("./notFoundPage.html", "utf-8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    }
    catch (err) {
        console.log("Err", err);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Something went Wrong....</h1>");

    }

});
server.listen(7000, () => {
    console.log("------Server Started--------");
});


















// http://localhost:7000
