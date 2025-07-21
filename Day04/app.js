const http = require('http')
const fsPromises = require('fs/promises')

const server = http.createServer(async (req, res) => {
    try {
        if (req.url == '/') {
            const data = await fsPromises.readFile("./Pages/HomePage.html", "utf-8");
            console.log("data",data);
            console.log( "TypeofData",typeof data);
            console.log("---------------------");
            console.log("---------------------");
            const newData = data.replace("__MAIN__", "<h1>Hello from Server</h1>")
            console.log(newData);
            console.log("TypeofData", typeof newData);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(newData);
        }
        else if (req.url == '/about') {
            const data = await fsPromises.readFile("./Pages/AboutPage.html", "utf-8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
        else {
            const data = await fsPromises.readFile("./Pages/notFoundPage.html", "utf-8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    }
    catch {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Something went Wrong....</h1>");

    }

});
server.listen(7000, () => {
    console.log("------Server Started--------");
});


















// http://localhost:7000
