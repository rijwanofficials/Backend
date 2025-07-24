


// sync_way----------------------------------------------------
// const os = require('node:os');
// const CPU_COUNT = os.cpus().length;
// // console.log("🚀 ~ ̥:", CPU_COUNT);

// // console.log(os.platform());
// // console.log(os.totalmem());

// // console.log(process.env);


// // console.log(process.env.user);

// const { performance } = require('perf_hooks');
// const { pbkdf2Sync } = require('node:crypto');
// const { CLIENT_RENEG_LIMIT } = require('node:tls');


// // '3745e48...08d59ae'

// const Itartion = 20;
// let totalTime=0;
// let minTime = Number.MAX_SAFE_INTEGER;
// let maxTime = 0
// let currentTime;

// const startTime = performance.now();
// for (let i = 0; i < Itartion; i++) {
//     const key = pbkdf2Sync('Rizwan', 'heavy security-asd', 999999, 10, 'sha512');
//     console.log(key.toString('hex'));
//     const endTime = performance.now();
//     currentTime = endTime - startTime;
//     totalTime += currentTime;
//     minTime = Math.min(minTime, currentTime);
//     maxTime = Math.max(maxTime, currentTime);
// }



// console.log("🚀totalTimetaken ~ ", totalTime);
// console.log("🚀minTimetaken ~ ", minTime);
// console.log("🚀maxTimetaken ~ ", maxTime);
// console.log("🚀AvgTimetaken ~ ", totalTime / Itartion);

// Assync way---------------------------------------------------

const { pbkdf2, } = require('node:crypto');
const { performance } = require('perf_hooks');


const Itartion = 20;
let totalTime = 0;
let minTime = Number.MAX_SAFE_INTEGER;
let maxTime = 0
let currentTime;

const startTime = performance.now();
for (let i = 0; i < Itartion; i++) {
    const key = pbkdf2('Rizwan', 'heavy security-asd', 999999, 10, 'sha512', (err, hash) => {
        if (err) throw err;
        // console.log(hash.toString('hex'));
        const endTime = performance.now();
        currentTime = endTime - startTime;
        console.log(currentTime);
        totalTime += currentTime;
        minTime = Math.min(minTime, currentTime);
        maxTime = Math.max(maxTime, currentTime);
    });
}



setTimeout(() => {
    console.log("🚀totalTimetaken ~ ", totalTime),
        console.log("🚀minTimetaken ~ ", minTime),
        console.log("🚀maxTimetaken ~ ", maxTime),
        console.log("🚀AvgTimetaken ~ ", totalTime / Itartion)
}, 4000)
