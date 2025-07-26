const fsPromises = require("fs/promises");
const { json } = require("stream/consumers");



const myReadfile = async (filePath) => {
    try {
        const data = await fsPromises.readFile(filePath, "utf-8");
        return JSON.parse(data);
    }
    catch (err) {
        console.log("Error reading the file-->", err.message);
        return [];
    }
}

const mySaveFile = async (filePath, data) => {
    try {
        const str = JSON.stringify(data)
        await fsPromises.writeFile(filePath, str);
    }
    catch (err) {
        console.log("Error saving the file-->", err.message);
        return [];
    }
}
module.exports = { myReadfile, mySaveFile };