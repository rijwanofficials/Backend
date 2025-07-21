const { power, division } = require("./maths_helper")

const calculateBMI = (obj) => {
    const { weight, height } = obj;
    const heightSqr = power(height, 2);
    const bmi = division(weight, heightSqr);
    setTimeout(() => {
        console.log(bmi);
    }, 1000);
}
module.exports = calculateBMI;