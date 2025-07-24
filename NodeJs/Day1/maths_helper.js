const division = (a, b) => {
    if (b == 0) {
        return a; // Optional: consider throwing an error instead
    } else {
        return a / b;
    }
};

const power = (a, b) => {
    return a ** b;
};

module.exports = {
    division,
    power,
};
