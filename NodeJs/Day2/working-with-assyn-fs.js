const fs = require("fs");


console.log("Start");
const startTime = performance.now();
fs.readFile("./my-file.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("can't read file--> ", err.message)
    }
    else {
        console.log("Data-->", data);
    }
})
const endTime = performance.now();

console.log(endTime-startTime);

console.log("End");
