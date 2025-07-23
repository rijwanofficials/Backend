const http = require('http')

const server = http.createServer((req, res) => {
    console.log("----->", req.method, req.url);
    res.writeHead(200, { 'content-type': 'application/json' })

    // if (req.url = '/') {

    // } else if (req.url = '/about') {

    // }
    res.end(
        JSON.stringify({
            isSuccess: true,
            message: "Server is running"
        })
    );
});


server.listen(2900, () => {
    console.log("--------Server Started-----------");
})