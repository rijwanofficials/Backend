const http = require('http')
const fsPromises = require('fs/promises')

const server = http.createServer(async (req, res) => {
    console.log("--->", req.method, req.url, new Date())
    try {
        if (req.url == '/home') {
            const data = await fsPromises.readFile("./Pages/HomePage.html", "utf-8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
        else if (req.url == '/HomePage.js') {
            const data = await fsPromises.readFile("./Pages/HomePage.js", "utf-8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
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
