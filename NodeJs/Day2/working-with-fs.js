// Synchronous
const fs = require("fs");
const { performance } = require('perf_hooks');

fs.writeFileSync("./my-file.txt", "ABCD");


const startTime = performance.now();
console.log("Start");                  //this operation is taking the 4.45ms
const endTime = performance.now();
console.log(endTime - startTime);   


const startTime2 = performance.now();
const data = fs.readFileSync("./my-file.txt", 'utf-8');     //this operation is taking the .091ms
const endTime2 = performance.now();
console.log(endTime2 - startTime2);
console.log("End");